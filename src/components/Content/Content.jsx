import './Content.scss'
import ReactECharts from 'echarts-for-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { $authHost } from '../../axios.js'
import CategoryList from '../CategoryList/categoryList.jsx'

function Content({ user }) {
	const [arrayName, setArrayName] = useState('')
	const [price, setPrice] = useState('')
	const [me, setMe] = useState(14)

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
	const onSubmit = async (data) => {
		try {
			const { arrayName, price } = data
			console.log('Data:', data) // Добавьте эту строку для отладки
			console.log('Price:', price) // Добавьте эту строку для отладки
			const response = await $authHost.put('/user/upd', {
				arrayName,
				price,
			})

			console.log(response.data)
		} catch (error) {
			console.error('Ошибка при добавлении данных на сервер:', error)
		}
	}

	const option = {
		tooltip: {
			trigger: 'item',
			formatter: `{b} : {d}%`,
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
			width: 300,
			itemGap: 20,
			orient: 'horizontal',
			top: 'bottom',
			textStyle: {
				fontFamily: 'LXGW WenKai TC',
			},
		},

		series: [
			{
				name: 'Расходы',
				type: 'pie',
				radius: [10, 110],
				center: ['25%', '50%'],
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
					{ value: 3, name: 'Вещи' },
					{ value: 23, name: 'Машина' },
					{ value: 4, name: 'Бурундук' },
					{ value: 7, name: 'Бобряша' },
					{ value: `${me}`, name: 'Суслик' },
				],
				height: '50%',
				width: '50%',
				left: '43%',
				top: '15%',
			},
		],
	}
	return (
		<div className='container'>
			<ReactECharts option={option} className='canvas' />

			<h3>Добавить </h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<select
					{...register('arrayName')}
					value={arrayName}
					onChange={handleArrayChange}
					className='select'
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
					className='input'
					value={price}
					onChange={handleValueChange} />
				<button type='submit' className='button'>
					Добавить
				</button>
			</form>
			<h3>Список</h3>
			<CategoryList title='Продукты' items={user.products}/>
			<CategoryList title='Бобряша' items={user.wife}/>
			<CategoryList title='Милашка' items={user.daughter}/>
			<CategoryList title='Машина' items={user.car}/>
			<CategoryList title='Вещи' items={user.things}/>
			<CategoryList title='Суслик' items={user.me}/>
		</div>
	)
}

export default Content
