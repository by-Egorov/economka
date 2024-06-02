import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
const App = () => {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
