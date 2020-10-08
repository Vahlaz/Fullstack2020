import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
  try {
    const response = await axios.post(baseUrl, credentials)
  return response.data
  } catch {
    return console.log('wrong credentials')
  }
}

export default { login }