import style from './CategoryList.module.css'
import React from 'react'
const categoryList = ({title, items, value}) => {
	return (
		<div className={`${style.category_list} ${style[value]}`}>
			<div className={style.title}>{title}:</div>
			<div className={style.price}>
			<ul className={style.list}>
				<li>{items} ₽</li>
			</ul>
			</div>
		</div>
	)
}

export default categoryList
