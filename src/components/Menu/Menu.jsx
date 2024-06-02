import React from 'react'
import style from './Menu.module.scss'
import arrow from '../../assets/arrow-right.png'
const Menu = ({ openMenu, isOpen }) => {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.header__back_to_menu}>
					<img src={arrow} alt='arrow' onClick={openMenu}/>
				</div>
			</div>
			<div className={style.content}>
				hello
			</div>
		</div>
	)
}

export default Menu
