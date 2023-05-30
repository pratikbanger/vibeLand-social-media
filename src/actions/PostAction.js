import { createPost, myPostAPI } from "../Api/PostRequest"

export const fetchMyPost = (userId) => async (dispatch) => {

    dispatch({ type: "FETCHING_USER_POSTS_START" })
    try {
        const newPost = await myPostAPI(userId)
        dispatch({ type: "FETCHING_USER_POSTS_SUCCESS", data: newPost.data.posts })
    } catch (error) {
        console.log(error)
        dispatch({ type: "FETCHING_USER_POSTS_FAILED" })
    }
}

export const createNewPost = (postData, userId) => async (dispatch) => {

    dispatch({ type: "CREATING_POSTS_START" })
    try {
        const newPost = await createPost(postData, userId)
        dispatch({ type: "CREATING_POSTS_SUCCESS", data: newPost.data.newPost })
    } catch (error) {
        console.log(error)
        dispatch({ type: "CREATING_POSTS_FAILED" })
    }
}