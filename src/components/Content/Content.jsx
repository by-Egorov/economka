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
		series: [
			{
				name: 'Radius Mode',
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
					{ value: 40, name: 'rose 1' },
					{ value: 33, name: 'rose 2' },
					{ value: 28, name: 'rose 3' },
					{ value: 22, name: 'rose 4' },
					{ value: 20, name: 'rose 5' },
					{ value: 15, name: 'rose 6' },
					{ value: 12, name: 'rose 7' },
					{ value: 10, name: 'rose 8' }
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
