import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import myLogo from './assets/my-logo.png'
import About from './components/About/About'
import Profile from './components/Profile/Profile'
const App = () => {
	const [isOpen, setIsOpen] = useState(false)
	const openMenu = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className='container'>
			<Routes>
				<Route
					path='/'
					element={<Home isOpen={isOpen} openMenu={openMenu} />}
				/>
				<Route
					path='/about'
					element={<About isOpen={isOpen} openMenu={openMenu} />}
				/>
				<Route
					path='/profile'
					element={<Profile isOpen={isOpen} openMenu={openMenu} />}
				/>
			</Routes>

			<div className='logo'>
				<img src={myLogo} alt='my logo' />
			</div>
		</div>
	)
}

export default App
