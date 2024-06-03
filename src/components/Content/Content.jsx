import style from './Content.module.scss'
import ReactECharts from 'echarts-for-react'

const Content = () => {
const	option = {
		
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		toolbox: {
			show: false,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		legend: {
			top: 'bottom'
		},
		series: [
			{
				name: 'Расходы',
				type: 'pie',
				radius: [20, 140],
				center: ['50%', '50%'],
				roseType: 'radius',
				itemStyle: {
					borderRadius: 8
				},
				label: {
					show: false
				},
				emphasis: {
					label: {
						show: false
					}
				},
				data: [
					{ value: 40, name: 'Продукты' },
					{ value: 33, name: 'Вещи' },
					{ value: 28, name: 'Машина' },
					{ value: 22, name: 'Бурундук' },
					{ value: 20, name: 'Бобряша' },
					{ value: 15, name: 'Суслик' },
				]
			},
		]
	};
	
	return (
		<div className={style.container}>
			<ReactECharts option={option} />
		</div>
	)
}

export default Content
