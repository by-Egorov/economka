import { Link } from 'react-router-dom'
import style from './Profile.module.scss'
import arrow from '../../assets/arrow-right.png'

const Profile = ({user}) => {
	return (
		<li className={style.container}>
			<Link to='/'>
				<img src={arrow} alt='arrow' />
			</Link>
			
		</li>
	)
}

export default Profile
