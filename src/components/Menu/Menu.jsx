import {Link} from 'react-router-dom'
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
				<ul className={style.content__menu}>
					<li className={style.content__menu_item}><Link onClick={openMenu}>Home</Link></li>
					<li className={style.content__menu_item}><Link to='/profile'>Profile</Link></li>
					<li className={style.content__menu_item}><Link to='/about'>About</Link></li>
				</ul>
			</div>
		</div>
	)
}
 
export default Menu
