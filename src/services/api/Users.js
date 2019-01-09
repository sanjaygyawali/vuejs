import axios from 'axios'

export default {
  getUsers () {

  },
  createusers (payload) {
      return axios.post('/posts',payload)
  }
}