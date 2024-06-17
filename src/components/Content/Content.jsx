import style from './Content.module.scss'
import ReactECharts from 'echarts-for-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { $authHost } from '../../axios.js'
const Content = ({ user }) => {
	const [arrayName, setArrayName] = useState('')
	const [price, setPrice] = useState('')
	const { register, handleSubmit, reset } = useForm()

	const dataInfo = [
		{ value: 'me', displayName: 'Я' },
		{ value: 'products', displayName: 'Продукты' },
		{ value: 'car', displayName: 'Машина' },
		{ value: 'wife', displayName: 'Жена' },
		{ value: 'things', displayName: 'Вещи' },
		{ value: 'daughter', displayName: 'Дочь' },
	]

	const handleArrayChange = event => {
		setArrayName(event.target.value)
	}
	const handleValueChange = event => {
		setPrice(event.target.value)
	}
	const onSubmit = async data => {
		try {
			const { arrayName, price } = data
			console.log('Data:', data) // Добавьте эту строку для отладки
			console.log('Price:', price) // Добавьте эту строку для отладки
			const response = await $authHost.put('/user/upd', {
				arrayName,
				price
			})

			console.log(response.data)
		} catch (error) {
			console.error('Ошибка при добавлении данных на сервер:', error)
		}
	}

	const option = {
		tooltip: {
			trigger: 'item',
			formatter: '{b} : {d}%',
			position: [120, 220],
			backgroundColor: '#E2E6E4',
			textStyle: {
				fontFamily: 'LXGW WenKai TC',
			},
		},
		toolbox: {
			show: false,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				restore: { show: true },
				saveAsImage: { show: true },
			},
		},
		legend: {
			orient: 'vertical',
			itemGap: 25,
			left: '-1%',
			top: '5%',
			textStyle: {
				fontFamily: 'LXGW WenKai TC',
			},
		},

		series: [
			{
				name: 'Расходы',
				type: 'pie',
				radius: [10, 110],
				center: ['50%', '50%'],
				roseType: 'radius',
				itemStyle: {
					borderRadius: 8,
				},
				label: {
					show: false,
				},
				emphasis: {
					label: {
						show: false,
					},
				},
				data: [
					{ value: 11, name: 'Продукты' },
					{ value: 12, name: 'Вещи' },
					{ value: 13, name: 'Машина' },
					{ value: 14, name: 'Бурундук' },
					{ value: 15, name: 'Бобряша' },
					{ value: 16, name: 'Суслик' },
				],
				height: '50%',
				width: '50%',
				left: '35%',
				top: '15%',
			},
		],
	}
	console.log(user)
	return (
		<div className={style.container}>
			<ReactECharts option={option} className={style.canvas} />

			<h3>Добавить </h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<select
					{...register('arrayName')}
					value={arrayName}
					onChange={handleArrayChange}
					className={style.select}
				>
					<option value='' disabled>
						Выбрать категорию
					</option>
					{dataInfo.map((item, index) => (
						<option key={index} value={item.value}>
							{item.displayName}
						</option>
					))}
				</select>
				<input
					type='number'
					placeholder='Введите значение'
					{...register('price', { required: true })}
					className={style.input}
					value={price}
					onChange={handleValueChange}
				/>
				<button type='submit' className={style.button}>
					Добавить
				</button>
			</form>
			<h3>Список</h3>
			<ul>
				Me:
				{user.me &&
					user.me.length > 0 &&
					user.me.map(item => <li key={item._id}>{item.price}</li>)}
			</ul>
			<ul>
				Wife:
				{user.wife &&
					user.wife.length > 0 &&
					user.wife.map(wife => <li key={wife._id}>{wife.price}</li>)}
			</ul>
			<ul>
				Car:
				{user.car && user.car.length > 0 ? (
					user.car.map(car => <li key={car._id}>{car.price}</li>)
				) : (
					<p>Тут ничего нет</p>
				)}
			</ul>
		</div>
	)
}

export default Content
