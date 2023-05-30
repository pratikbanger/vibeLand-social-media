import { SignUp, logIn } from "../Api/AuthRequest"


export const login = (formData) => async (dispatch) => {

    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await logIn(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const signUp = (formData) => async (dispatch) => {

    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await SignUp(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const logoutUser = () => async(dispatch) => {
    dispatch({type: "LOGOUT_USER"})
}