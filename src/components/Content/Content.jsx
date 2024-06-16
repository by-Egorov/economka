import style from './Content.module.scss'
import ReactECharts from 'echarts-for-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { $authHost } from '../../axios.js'
const Content = ({ user }) => {
	const [selectedArrayName, setSelectedArrayName] = useState('')
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
		setSelectedArrayName(event.target.value)
	}
	const onSubmit = async formData => {
		try {
			const { value } = formData

			const response = await $host.post(`/data/price/${data._id}`, {
				arrayName: selectedArrayName,
				value: parseInt(value, 10), // Преобразуем значение в число
			})
			console.log(response.data)
			reset()
		} catch (error) {
			console.warn(error)
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

	return (
		<div className={style.container}>
			<ReactECharts option={option} className={style.canvas} />

			<h3>Добавить </h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<select
					{...register('arrayName')}
					value={selectedArrayName}
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
					{...register('value', { required: true })}
					className={style.input}
				/>
				<button type='submit' className={style.button}>
					Добавить
				</button>

				<h3>Список</h3>

				<ul>
					<li>Я:</li>
					<li>Машина: .</li>
					<li>Продукты: data.</li>
					<li>Жена: data.</li>
					<li>Дочь: data.</li>
					<li>Вещи: data.</li>
				</ul>
			</form>
		</div>
	)
}

export default Content
