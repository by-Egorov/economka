import { useState } from 'react'
const useUserData = user => {
	const [me, setMe] = useState(() => {
		const item = user.me
		const sum = item.reduce((acc, rec) => acc + rec.price, 0)
		return sum
	})
	const [car, setCar] = useState(() => {
		const item = user.car
		const sum = item.reduce((acc, rec) => acc + rec.price, 0)
		return sum
	})
	const [wife, setWife] = useState(() => {
		const item = user.wife
		const sum = item.reduce((acc, rec) => acc + rec.price, 0)
		return sum
	})
	const [things, setThings] = useState(() => {
		const item = user.things
		const sum = item.reduce((acc, rec) => acc + rec.price, 0)
		return sum
	})
	const [daughter, setDaughter] = useState(() => {
		const item = user.daughter
		const sum = item.reduce((acc, rec) => acc + rec.price, 0)
		return sum
	})
	const [products, setProducts] = useState(() => {
		const item = user.products
		const sum = item.reduce((acc, rec) => acc + rec.price, 0)
		return sum
	})
	const [arrayName, setArrayName] = useState('')
	const [price, setPrice] = useState('')

	return {
		me,
		setMe,
		car,
		setCar,
		wife,
		setWife,
		things,
		setThings,
		daughter,
		setDaughter,
		products,
		setProducts,
		arrayName,
		setArrayName,
		price,
		setPrice
	}
}

export default useUserData
