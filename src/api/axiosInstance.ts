import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://shop-backend-59ka.onrender.com',
    withCredentials: true
})