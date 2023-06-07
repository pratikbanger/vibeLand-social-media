import axios from "axios";

// const API = axios.create({ baseURL: "https://vibe-land-server.onrender.com" })
const API = axios.create({ baseURL: "http://localhost:5000" })

export const myPostAPI = (userId) => API.get(`/post/mypost/${userId}`)
export const createPost = (postData, userId) => API.post(`/post/createpost/${userId}`, postData)
export const deletePostAPI = (postId, userID) => API.delete(`post/deletepost/${postId}`, { userId: userID })