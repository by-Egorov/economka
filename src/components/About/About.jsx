import React from 'react'
import { Link } from 'react-router-dom'
import style from './About.module.scss'
import arrow from '../../assets/arrow-right.png'
const About = () => {
	return (
		<div className={style.container}>
			<Link to='/'>
				<img src={arrow} alt='arrow' />
			</Link>
		</div>
	)
}

export default About
