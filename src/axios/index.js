import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8080' }) // bunu surekli ayni seyi yazmamak icin yazdim

export const createMemory = async (newMemory) => {
    await API.post('/memories', newMemory) //  post metodu ile newMemory'yi gonderiyoruz
}