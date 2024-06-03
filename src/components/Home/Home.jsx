import style from './Home.module.scss'
import myLogo from '../../assets/my-logo.png'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import Menu from '../../components/Menu/Menu'
import Content from '../Content/Content'
const Home = ({ isOpen, openMenu }) => {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.header__logo}>
					<img src={logo} alt='logo' />
				</div>
				<div className={style.header__menu}>
					<img src={menu} alt='menu' onClick={openMenu} />
				</div>
			</div>
			{isOpen && <Menu isOpen={isOpen} openMenu={openMenu} />}

			<Content/>

			<div className={style.logo}>
				<img src={myLogo} alt='my logo' />
			</div>
		</div>
	)
}

export default Home
