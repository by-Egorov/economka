import axios from 'axios'
const $host = axios.create({
	// baseURL: 'http://localhost:5000/ap
	baseURL: 'https://economka-server.onrender.com/ap
})
const $authHost = axios.create({
	// baseURL:  'http://localhost:5000/ap
	baseURL:  'https://economka-server.onrender.com/ap
})
$authHost.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
	}
	return config;
}, error => {
	return Promise.reject(error);
})

export { $host, $authHost }
