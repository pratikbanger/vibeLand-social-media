import axios from "axios";

const API = axios.create({ baseURL: "https://vibe-land-server.onrender.com" })
// const API = axios.create({ baseURL: "http://localhost:5000" })

export const timelinePostsAPI = (id) => API.get(`/post/followinguserposts/${id}`)
export const likePost = (postID, userID) => API.put(`/post/likepost/${postID}`, { userId: userID })