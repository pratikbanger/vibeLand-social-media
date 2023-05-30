import axios from "axios";

const API = axios.create({ baseURL: "https://vibe-land-server.onrender.com" })

export const myPostAPI = (userId) => API.get(`/post/mypost/${userId}`)
export const createPost = (postData, userId) => API.post(`/post/createpost/${userId}`, postData)
