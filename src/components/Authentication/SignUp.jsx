import React from 'react'
import { Formik, Form, Field } from 'formik';
import './Authentication.css'
import vibeLandLogo from '../../img/vibeLandLogo.png'
import loadingSpinner from '../../img/loading.gif'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../actions/AuthAction'
import { signUpSchema } from '../../Schemas/validationSchema'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.authReducer.loading)

    return (
        <div className="Authentication">
            <div className="a-left">
                <img src={vibeLandLogo} alt="Vibe Land Logo" />
            </div>

            <div className="a-right signUpPage">

                <Formik
                    initialValues={{
                        firstname: "",
                        lastname: "",
                        username: "",
                        password: "",
                        confirmpassword: ""
                    }}
                    validationSchema={signUpSchema}
                    onSubmit={(values) => {
                        dispatch(signUp(values))
                        console.log(values)
                    }}
                    errors={(errors) => {
                        console.log(errors)
                    }}>
                    {({ errors, touched, handleBlur, handleSubmit }) => (

                        <Form action="" className="infoForm authForm" onSubmit={handleSubmit}>
                            <h3>Sign Up</h3>

                            <div>
                                <Field
                                    className='infoInput signupInput'
                                    type="text"
                                    placeholder='First Name'
                                    name='firstname'
                                    onBlur={handleBlur}
                                />
                                <Field
                                    className='infoInput signupInput'
                                    type="text"
                                    placeholder='Last Name'
                                    name='lastname'
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.firstname && touched.firstname ? <p style={{ color: "red", fontSize: "13px", alignSelf: "flex-start" }} >{errors.firstname}</p> : null}
                            {errors.lastname && touched.lastname ? <p style={{ color: "red", fontSize: "13px", alignSelf: "flex-start" }} >{errors.lastname}</p> : null}

                            <div>
                                <Field
                                    className='infoInput signupInput'
                                    type="text"
                                    placeholder='@username'
                                    name='username'
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.username && touched.username ? <p style={{ color: "red", fontSize: "13px", alignSelf: "flex-start" }} >{errors.username}</p> : null}

                            <div>
                                <Field
                                    className='infoInput signupInput'
                                    type="password"
                                    placeholder='Password'
                                    name='password'
                                    onBlur={handleBlur}
                                />
                                <Field
                                    className='infoInput signupInput'
                                    type="password"
                                    placeholder='Confirm Password'
                                    name='confirmpassword'
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.password && touched.password ? <p style={{ color: "red", fontSize: "13px", alignSelf: "flex-start" }} >{errors.password}</p> : null}
                            {errors.confirmpassword && touched.confirmpassword ? <p style={{ color: "red", fontSize: "13px", alignSelf: "flex-start" }} >{errors.confirmpassword}</p> : null}

                            <div className='submitDiv'>

                                <span style={{ fontSize: "13px" }}>Already have an account. <Link to="/login">Login</Link> here!</span>

                                {!loading
                                    ? <button className="button signup-button" type="submit">Sign Up</button>
                                    : <img className='loadingSpinner' src={loadingSpinner} alt="loading..." />
                                }

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignUp
