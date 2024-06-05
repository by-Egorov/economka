import style from './Content.module.scss'
import ReactECharts from 'echarts-for-react'

const Content = () => {
	let item1 = 2.276
	let item2 = 0
	let item3 = 0
	let item4 = 0
	let item5 = 5
	let item6 = 0
	let num = 1276
	const res = num / 100 * 1
	console.log(res / 10)
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
					{ value: item1, name: 'Продукты' },
					{ value:  item2, name: 'Вещи' },
					{ value:  item3, name: 'Машина' },
					{ value:  item4, name: 'Бурундук' },
					{ value:  item5, name: 'Бобряша' },
					{ value:  item6, name: 'Суслик' },
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

			<h3>Список: </h3>

			<ul>
				<li>Продукты: {item1} p</li>
				<li>Вещи: {item2} p</li>
				<li>Машина: {item3} p</li>
				<li>Бурундук: {item4} p</li>
				<li>Бобряша: {item5} p</li>
				<li>Сулсик: {item6} p</li>
			</ul>
		</div>
	)
}

export default Content
