import axios from 'axios'
const $host = axios.create({
	baseURL: import.meta.env.VITE_LOCAL_URL,
	// baseURL: import.meta.env.VITE_API_URL,
})
const $authHost = axios.create({
	baseURL:  import.meta.env.VITE_LOCAL_URL,
	// baseURL: import.meta.env.VITE_API_URL,
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
