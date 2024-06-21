import React from 'react'
import style from './categoryList.module.css'
const categoryList = ({title, items}) => {
	return (
		<div className={style.container}>
			<h3 className={style.title}>{title}:</h3>
			<ul className={style.list}>
				{items && items.length > 0 ? (
					items.map(item => <li key={item._id} className={style.list__item}>{item.price}</li>)
				) : (
					<p className={style.list__text}>Тут ничего нет</p>
				)}
			</ul>
		</div>
	)
}

export default categoryList