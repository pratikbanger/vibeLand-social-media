import { timelinePostsAPI } from "../Api/TimelinePostsRequest"

export const fetchTimelinePosts = (id) => async (dispatch) => {

    dispatch({ type: "FETCHING_TIMELINE_POSTS_START" })
    try {
        const timilineData = await timelinePostsAPI(id)
        dispatch({ type: "FETCHING_TIMELINE_POSTS_SUCCESS", data: timilineData.data.followingPosts })
    } catch (error) {
        console.log(error)
        dispatch({ type: "FETCHING_TIMELINE_POSTS_FAILED" })
    }
}