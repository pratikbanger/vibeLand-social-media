import { followUnFollowUserAPI, followUserListAPI, followingUserListAPI, getAllUserAPI, getProfileUser, updateUserAPI } from "../Api/UserRequest"

export const updateUserDetail = (userId, formData) => async (dispatch) => {
    dispatch({ type: "UPDATING_START" })
    try {
        const { data } = await updateUserAPI(userId, formData)
        dispatch({ type: "UPDATING_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "UPDATING_FAILED" })
        console.log(error)
    }
}

export const searchUserProfile = (userId) => async (dispatch) => {
    dispatch({ type: "SEARCHING_USER_START" })
    try {
        const { data } = await getProfileUser(userId)
        dispatch({ type: "SEARCHING_USER_SUCCESS", data: data.otherDetails })
    } catch (error) {
        console.log(error)
        dispatch({ type: "SEARCHING_USER_FAILED" })
    }
}

export const followUserList = (userId) => async (dispatch) => {
    dispatch({ type: "FOLLOW_USER_LIST_START" })
    try {
        const { data } = await followUserListAPI(userId)
        dispatch({ type: "FOLLOW_USER_LIST_SUCCESS", data: data.list })
    } catch (error) {
        console.log(error)
        dispatch({ type: "FOLLOW_USER_LIST_FAILED" })
    }
}

export const followingUserList = (userId) => async (dispatch) => {
    dispatch({ type: "FOLLOW_USER_LIST_START" })
    try {
        const { data } = await followingUserListAPI(userId)
        dispatch({ type: "FOLLOW_USER_LIST_SUCCESS", data: data.list })
    } catch (error) {
        console.log(error)
        dispatch({ type: "FOLLOW_USER_LIST_FAILED" })
    }
}

export const fetchNewUser = () => async (dispatch) => {
    dispatch({ type: "FETCHING_NEW_USER_START" })
    try {
        const { data } = await getAllUserAPI()
        dispatch({ type: "FETCHING_NEW_USER_SUCCESS", data: data.users })
    } catch (error) {
        console.log(error)
        dispatch({ type: "FETCHING_NEW_USER_FAILED" })
    }
}

export const followUnFollowUser = (userId, myId) => async (dispatch) => {
    dispatch({ type: "FOLLOW_USER_START" })
    try {
        const { data } = await followUnFollowUserAPI(userId, myId)
        dispatch({ type: "FOLLOW_USER_SUCCESS", data: data.updatedUserList })
    } catch (error) {
        console.log(error)
        dispatch({ type: "FOLLOW_USER_FAILED" })
    }
}