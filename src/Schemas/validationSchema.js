import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    firstname: Yup.string().min(2).required("*First Name is required"),
    lastname: Yup.string().min(2).required("*Last Name is required"),
    username: Yup.string().min(4, "*Username must be at least 4 character long!").required("*Username is required"),
    password: Yup.string().min(5, "*Password must be at least 5 character long!").required("*Password must be at least 5 character long"),
    confirmpassword: Yup.string().required("*Confirm password is required").oneOf([Yup.ref('password'), null], "*Confirm Password must be same as password"),
})

export const loginSchema = Yup.object({
    username: Yup.string().required("*Username is required"),
    password: Yup.string().required("*Password is required")
})