import Api from './API'

export default {
  login (credentials) {
    return Api.post('/login', credentials)
  },
  
}