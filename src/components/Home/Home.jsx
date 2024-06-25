import style from './Home.module.css'
import myLogo from '../../assets/my-logo.png'
import menu from '../../assets/menu.png'
import Menu from '../../components/Menu/Menu'
import Content from '../Content/Content'
import { Link } from 'react-router-dom'
const Home = ({ isOpen, openMenu, user }) => {
	return (
		<>
			{user !== null ? (
				<div className={style.container}>
					<div className={style.header}>
						<div className={style.my_logo}>
							<img src={myLogo} alt='my logo' />
						</div>
						<div className={style.header__menu}>
							<img src={menu} alt='menu' onClick={openMenu} />
						</div>
					</div>
					{isOpen && <Menu isOpen={isOpen} openMenu={openMenu} />}

					<Content user={user} />
				</div>
			) : (
				<Link to='/login'>Please to login</Link>
			)}
		</>
	)
}

export default Home
