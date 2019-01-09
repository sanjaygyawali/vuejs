import axios from 'axios'

const instance = axios.create({
  baseURL: '127.0.0.1:8000'
})

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
instance.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = instance.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})

const resInterceptor = instance.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

export default instance
