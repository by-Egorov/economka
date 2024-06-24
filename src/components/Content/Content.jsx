import style from './Content.module.css'

import ReactECharts from 'echarts-for-react'
import { useForm } from 'react-hook-form'
import { $authHost } from '../../axios.js'

import CategoryList from '../CategoryList/CategoryList.jsx'
import useUserData from '../../useUserData/useUserData.js'


import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function Content({ user }) {
	const {
		me,
		setMe,
		car,
		setCar,
		wife,
		setWife,
		things,
		setThings,
		daughter,
		setDaughter,
		products,
		setProducts,
		arrayName,
		setArrayName,
		price,
		setPrice,
	} = useUserData(user)

	const { register, handleSubmit, reset } = useForm()

	const dataInfo = [
		{ value: 'me', displayName: 'Суслик' },
		{ value: 'products', displayName: 'Продукты' },
		{ value: 'car', displayName: 'Машина' },
		{ value: 'wife', displayName: 'Бобряша' },
		{ value: 'things', displayName: 'Вещи' },
		{ value: 'daughter', displayName: 'Бурундук' },
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
			await $authHost.put('/user/upd', {
				arrayName,
				price: parseFloat(price),
			})
			reset()
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
					{ value: `${products}`, name: 'Продукты' },
					{ value: `${things}`, name: 'Вещи' },
					{ value: `${car}`, name: 'Машина' },
					{ value: `${daughter}`, name: 'Бурундук' },
					{ value: `${wife}`, name: 'Бобряша' },
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
		<>
			{user ? (
				<div className={style.container}>
					<ReactECharts option={option} className={style.canvas} />

					<h3>Добавить </h3>

					<FormControl
						sx={{ m: 1, minWidth: 120, display: 'flex', gap: 2 }}
						size='small'
					>
						<InputLabel id='demo-select-small-label'>Выбрать</InputLabel>
						<Select
							{...register('arrayName')}
							labelId='demo-select-small-label'
							id='demo-select-small'
							value={arrayName}
							label='Выбрать'
							onChange={handleArrayChange}
						>
							<MenuItem value=''>
								<em>None</em>
							</MenuItem>
							{dataInfo.map((item, index) => (
								<MenuItem key={index} value={item.value}>
									{item.displayName}
								</MenuItem>
							))}
						</Select>

						<TextField
							{...register('price', { required: true })}
							onChange={handleValueChange}
							value={price}
							id='outlined-size-small'
							size='small'
							label='Цена'
							variant='outlined'
							type='number'
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<Button
							sx={{ color: 'green' }}
							variant='outlined'
							size='small'
							onClick={handleSubmit(onSubmit)}
						>
							Добавить
						</Button>
					</FormControl>

					<div className={style.list_wrapper}>
						{dataInfo.map(({ value, displayName }) => (
							<CategoryList
								key={value}
								value={value}
								title={displayName}
								items={
									value === 'products'
										? products
										: value === 'wife'
										? wife
										: value === 'daughter'
										? daughter
										: value === 'car'
										? car
										: value === 'things'
										? things
										: value === 'me'
										? me
										: []
								}
							/>
						))}
					</div>
				</div>
			) : (
				<p> please login</p>
			)}
		</>
	)
}

export default Content
