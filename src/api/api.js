import axios from 'axios'
let url = '/mma/admin'
export default {
  login (name, pass) {
    return axios.put(url + '/auth/login', {
      password: pass,
      rememberMe: '',
      username: name,
      verificationCode: ''
    })
  }
}
