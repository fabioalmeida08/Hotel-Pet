import axios from 'axios'
const accessKey = '5cf1a0e797f9a1bc26a3bf76c1d139a8'

const hotelPetApi = axios.create({
  baseURL: 'https://hotelpetapi.herokuapp.com/'
})

const climaApi = axios.create({
  baseURL: 'http://api.weatherstack.com/'
})

export default hotelPetApi

export {climaApi,accessKey}