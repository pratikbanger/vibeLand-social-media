

const authReducer = (state = { authData: null, newUserData: [], searchUserData: [], followUserList: [], followUserListLoading: false, searchUserLoading: false, loading: false, updateLoading: false, fetchUserLoading: false, followLoading: false, error: false }, action) => {
    switch (action.type) {
        case "AUTH_START":
            return { ...state, loading: true, error: false }

        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data, loading: false, error: false }

        case "AUTH_FAIL":
            return { ...state, error: true, loading: false }




        // Updating user
        case "UPDATING_START":
            return { ...state, updateLoading: true, error: false }

        case "UPDATING_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data, updateLoading: false, error: false }

        case "UPDATING_FAILED":
            return { ...state, error: true, loading: false }




        // Fetch new user
        case "FETCHING_NEW_USER_START":
            return { ...state, fetchUserLoading: true, error: false }

        case "FETCHING_NEW_USER_SUCCESS":
            return { ...state, newUserData: action.data, fetchUserLoading: false, error: false }

        case "FETCHING_NEW_USER_FAILED":
            return { ...state, error: true, fetchUserLoading: false }



        // Follow user list
        case "FOLLOW_USER_LIST_START":
            return { ...state, followUserListLoading: true, error: false }

        case "FOLLOW_USER_LIST_SUCCESS":
            return { ...state, followUserList: action.data, followUserListLoading: false, error: false }

        case "FOLLOW_USER_LIST_FAILED":
            return { ...state, error: true, followUserListLoading: false }



        // Search user
        case "SEARCHING_USER_START":
            return { ...state, searchUserLoading: true, error: false }

        case "SEARCHING_USER_SUCCESS":
            return { ...state, searchUserData: action.data, searchUserLoading: false, error: false }

        case "SEARCHING_USER_FAILED":
            return { ...state, error: true, searchUserLoading: false }




        // Follow user
        case "FOLLOW_USER_START":
            return { ...state, followLoading: true, error: false }

        case "FOLLOW_USER_SUCCESS":
            return { ...state, authData: { ...state.authData, user: { ...state.authData.user, following: action.data } }, followLoading: false }

        case "FOLLOW_USER_FAILED":
            return { ...state, followLoading: false, error: true }




        // Logout user
        case "LOGOUT_USER":
            localStorage.clear();
            return { ...state, authData: null, loading: false, error: false }

        default:
            return state
    }
}

export default authReducer