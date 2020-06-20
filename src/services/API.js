import axios from 'axios'
const instance = axios.create({
   baseURL: 'http://localhost:3535/',
   headers: {
     
   }
})
export default instance