// Timeline Post Reducer
export const timelinePostReducer = (state = { timelinePostData: [], loading: false, error: false }, action) => {
    switch (action.type) {
        case "FETCHING_TIMELINE_POSTS_START":
            return { ...state, loading: true, error: false }

        case "FETCHING_TIMELINE_POSTS_SUCCESS":
            return { ...state, timelinePostData: action.data, loading: false, error: false }

        case "FETCHING_TIMELINE_POSTS_FAILED":
            return { ...state, error: true, loading: false }

        default:
            return state
    }
}