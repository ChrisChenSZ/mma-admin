import Cookies from 'js-cookie'
const getToken = () => {
  return Cookies.get('mma_token')
}
const setToken = (token) => {
  Cookies.set('mma_token', token)
}
const rmToken = () => {
  Cookies.remove('mma_token')
}
export default {
  getToken,
  rmToken,
  setToken
}
