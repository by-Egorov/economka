import React from 'react'
import style from './categoryList.module.css'
const categoryList = ({title, items}) => {
	return (
		<div className={style.container}>
			<h3 className={style.title}>{title}:</h3>
			<ul className={style.list}>
				<li>{items}</li>
			</ul>
		</div>
	)
}

export default categoryList