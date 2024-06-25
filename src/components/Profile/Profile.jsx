import { Link } from 'react-router-dom'
import style from './Profile.module.scss'
import arrow from '../../assets/arrow-right.png'

const Profile = ({user}) => {
	return (
		<div className={style.container}>
			<Link to='/'>
				<img src={arrow} alt='arrow' />
			</Link>
				
		</div>
	)
}

export default Profile
