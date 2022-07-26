import axios from 'axios'
import { mockapiUrl } from './utils'

const instance = axios.create({
  baseURL: mockapiUrl
})

export default instance
