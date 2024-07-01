import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { $host, $authHost } from '../../axios'

const Auth = ({ user, setUser }) => {
	const navigate = useNavigate()
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const [loginErr, setLoginErr] = useState('')

	const registration = async data => {
		const { email, password } = data

		try {
			const response = await $host.post('/register', {
				email,
				password,
			})
			reset()
			localStorage.setItem('user', JSON.stringify(response.data))
			setUser(response.data)
			// navigate('/login')
			console.log(response.data)
		} catch (error) {
			if (error.response && error.response.data) {
				// Выводим только response.data
				console.log(error.response.data)
				if (error.response.status === 409) {
					alert('Пользователь с таким email уже существует')
				} else {
					alert(`Ошибка регистрации: ${error.response.data.message}`)
				}
			} else {
				console.error('Ошибка регистрации:', error)
				alert('Ошибка регистрации')
			}
		}
	}

	const login = async data => {
		try {
			const { email, password } = data
			const response = await $host.post('/login', {
				email,
				password,
			})

			if (response) {
				localStorage.setItem('user', JSON.stringify(response.data))
				localStorage.setItem('token', JSON.stringify(response.data.token))
				setUser(response.data)
				navigate('/')
			} else {
				console.warn('Ошибка авторизации')
			}
		} catch (error) {
			if (error.response && error.response.data) {
				console.log(error.response.data)
				const status = error.response.status
				if (status === 400) {
					setLoginErr('Пользователь с таким email не найден')
				} else if (status === 401) {
					setLoginErr('Неправильный пароль')
				} else if (status === 409) {
					setLoginErr('Не верные данные, повторите ввод')
				} else {
					setLoginErr(
						`Произошла ошибка при авторизации: ${error.response.data.message}`
					)
				}
			} else {
				console.error('Ошибка при авторизации:', error)
				setLoginErr('Произошла ошибка при авторизации')
			}
		}
	}

	return (
		<>
			<form>
				<div className='input'>
					<label className={!errors.email ? '' : 'err'}>
						{!errors.email ? 'Email Address' : 'Обязательное поле'}
					</label>
					<input
						{...register('email', {
							required: true,
							pattern: {
								value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
								message: 'Введите корректный email',
							},
						})}
						type='text'
					/>
				</div>

				<div className='input'>
					<label className={!errors.email ? '' : 'err'}>
						{!errors.password ? 'Password' : 'Обязательное поле'}
					</label>
					<input
						{...register('password', { required: true })}
						type='password'
					/>
				</div>

				<button
					onClick={
						location.pathname === '/login'
							? handleSubmit(login)
							: handleSubmit(registration)
					}
				>
					{location.pathname === '/login' ? 'Login' : 'Register'}
				</button>
				<div></div>
			</form>
		</>
	)
}

export default Auth
