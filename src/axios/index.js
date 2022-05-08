import axios from 'axios'

const API = axios.create({ // bunu surekli ayni seyi yazmamak icin yazdim
    baseURL: 'http://localhost:8080',
    withCredentials: true, // cookie icin
})

// AUTHORIZATION
API.interceptors.request.use((req) => { // burada gonderilen istekle alakali ne yapilacagina karar veriyoruz
    if (localStorage.getItem('user')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}` // Bearer -> token'in tipini belirtiyor
        // isteklerin header kisminda bunu gonderiyorum
    }
    return req
})

// *** burda kullandigim metodlari server -> routers -> memoryRouter.js icinde yazdim. burdan axiosla o metodlari kullanarak serverdan db'ye istek yapiyorum. ve bu islemleri yapiyorum 

// GET ALL MEMORIES
export const fetchMemories = async () => await API.get('/memories')

// GET ONE MEMORY
export const fetchMemory = async (id) => await API.get(`/memories/${id}`)

// CREATE MEMORY
export const createMemory = async (newMemory) => { // arrow fonksiyonda {} kullanirsak mutlaka return yazmaliyiz
    return await API.post('/memories', newMemory) //  server a post istegi gonderiyoruz. server da post metodu ile newMemory'yi db ye gonderiyor
}

// UPDATE MEMORY
export const updateMemory = async (id, updatedMemory) => await API.put(`/memories/${id}`, updatedMemory)
// server a update istegi gonderiyoruz. server da put metodu ile Memory'yi db'den update ediyor

// DELETE MEMORY
export const deleteMemory = async (id) => await API.delete(`/memories/${id}`) // server a delete istegi gonderiyoruz. server da delete metodu ile Memory'yi db'den siliyor

// CREATE USER
export const signUp = async (formData) => await API.post('/users/signup', formData) // server a post istegi gonderiyoruz. server da post metodu ile userData'yi db ye gonderiyor

// LOGIN
export const signIn = async (formData) => await API.post('/users/signin', formData)

// LOGOUT
export const logOut = async (id) => await API.get(`/users/logout/${id}`)

// REFRESHTOKEN
export const refreshAccessToken = async (userId) => await API.get(`/users/refresh/${userId}`)
