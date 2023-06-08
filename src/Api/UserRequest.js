import axios from "axios";

const API = axios.create({ baseURL: "https://vibe-land-server.onrender.com" })
// const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).authToken}`
    }

    return req
})

export const getProfileUser = (userId) => API.get(`/user/getuser/${userId}`)
export const updateUserAPI = (userId, formData) => API.put(`/user/updateuser/${userId}`, formData)
export const getAllUserAPI = () => API.get(`/user/fetchalluser/`)
export const searchUserAPI = (username) => API.get(`/user/searchuser/${username}`)
export const followUnFollowUserAPI = (userId, myId) => API.put(`/user/follow/${userId}`, { _id: myId })
export const followUserListAPI = (userId) => API.get(`/user/followerslist/${userId}`)
export const followingUserListAPI = (userId) => API.get(`/user/followinglist/${userId}`)
