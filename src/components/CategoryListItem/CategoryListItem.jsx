import style from './CategoryListItem.module.css'
import React from 'react'
const categoryListItem = ({ title, items, value }) => {
	return (
		<>
			<div className={`${style.list__item} ${style[value]}`}>
				<div className={style.title}>{title}:</div>
				<div className={style.price}>{items} ₽</div>
			</div>
		</>
	)
}

export default categoryListItem
