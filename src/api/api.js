import axios from 'axios'
let url = '/mma/admin'
export default {
  login () {
    return axios.put(url + '/auth/login', {
      password: 'd033e22ae348aeb5660fc2140aec35850c4da997',
      rememberMe: '',
      username: 'root',
      verificationCode: ''
    })
  }
}
