import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://pemuw61t2d.execute-api.us-east-2.amazonaws.com',
})
