import axios from 'axios'

const instance = axios.create({
   baseURL: 'http://localhost:3535/',
  // baseURL: 'http://localhost:3000/',
  // headers: {
  //   Authorization: `Bearer ${store.state.token}`
  // }
})
export default instance