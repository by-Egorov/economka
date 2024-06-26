import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Profile from './components/Profile/Profile'
import Auth from './components/Auth/Auth'
import { $authHost } from './axios'
const App = () => {
	const [isOpen, setIsOpen] = useState(false)
	const openMenu = () => {
		setIsOpen(!isOpen)
	}
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = localStorage.getItem('token')
				if (!token) {
					throw new Error('Токен не найден')
				}
				const { data } = await $authHost.get('/user')
				localStorage.setItem('user', JSON.stringify(data))
			} catch (error) {
				console.log(error.response.data)
			}
		}
		fetchData()
	}, [])
	return (
		<div className='container'>
			<Routes>
				<Route
					path='/'
					element={
						user ? (
							<Home isOpen={isOpen} openMenu={openMenu} user={user} />
						) : (
							<Navigate to='/login' replace />
						)
					}
				/>
				<Route
					path='/register'
					element={<Auth user={user} setUser={setUser} />}
				/>
				<Route path='/login' element={<Auth user={user} setUser={setUser} />} />
				<Route
					path='/about'
					element={<About isOpen={isOpen} openMenu={openMenu} />}
				/>
				<Route
					path='/profile'
					element={
						user ? (
							<Profile isOpen={isOpen} openMenu={openMenu} user={user} />
						) : (
							<Navigate to='/login' replace />
						)
					}
				/>
			</Routes>
		</div>
	)
}

export default App
