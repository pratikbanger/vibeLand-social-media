import axios from "axios";

const API = axios.create({ baseURL: "https://vibe-land-server.onrender.com" })

export const logIn = (formData) => API.post('/auth/login', formData)
export const SignUp = (formData) => API.post('/auth/register', formData)