// User Post Reducer
export const userPostReducer = (state = { userPostData: [], myPostLoading: false, error: false }, action) => {
    switch (action.type) {
        case "FETCHING_USER_POSTS_START":
            return { ...state, myPostLoading: true, error: false }

        case "FETCHING_USER_POSTS_SUCCESS":
            return { ...state, userPostData: action.data, myPostLoading: false, error: false }

        case "FETCHING_USER_POSTS_FAILED":
            return { ...state, error: true, myPostLoading: false }

        default:
            return state
    }
}

export const createPostReducer = (state = { postData: [], loading: false, error: false }, action) => {
    switch (action.type) {
        case "CREATING_POSTS_START":
            return { ...state, loading: true, error: false }

        case "CREATING_POSTS_SUCCESS":
            return { ...state, postData: [...state.postData, action.data], loading: false, error: false }

        case "CREATING_POSTS_FAILED":
            return { ...state, error: true, loading: false }

        default:
            return state
    }
}