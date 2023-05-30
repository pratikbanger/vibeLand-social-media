import React from 'react'
import { Formik, Form, Field } from 'formik';
import './Authentication.css'
import vibeLandLogo from '../../img/vibeLandLogo.png'
import loadingSpinner from '../../img/loading.gif'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/AuthAction'
import { loginSchema } from '../../Schemas/validationSchema';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loading = useSelector((state) => state.authReducer.loading)

    return (
        <div className="Authentication">
            <div className="a-left">
                <img src={vibeLandLogo} alt="Vibe Land Logo" />
            </div>

            <div className="a-right">

                <Formik
                    initialValues={{
                        username: "",
                        password: ""
                    }}
                    validationSchema={loginSchema}
                    onSubmit={(values) => {
                        dispatch(login(values))
                        navigate('/')
                    }}
                    errors={(errors) => {
                        console.log(errors)
                    }}
                >

                    {({ errors, touched, handleBlur, handleSubmit }) => (

                        <Form className="infoForm authForm" onSubmit={handleSubmit}>
                            <h3>Login</h3>

                            <div>
                                <Field
                                    className='infoInput'
                                    type="text"
                                    placeholder='@username'
                                    name='username'
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.username && touched.username ? <p style={{ color: "red", fontSize: "13px", alignSelf: "flex-start" }} >{errors.username}</p> : null}

                            <div>
                                <Field
                                    className='infoInput'
                                    type="password"
                                    placeholder='Password'
                                    name='password'
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.password && touched.password ? <p style={{ color: "red", fontSize: "13px", alignSelf: "flex-start" }} >{errors.password}</p> : null}

                            <div className='submitDiv'>

                                <span style={{ fontSize: "13px" }}>Don't have an account. <Link to="/signup">SignUp</Link> here!</span>

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

export default LogIn
