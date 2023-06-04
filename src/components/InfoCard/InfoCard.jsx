import React, { useState } from 'react'
import './InfoCard.css'
import loadingSpinner from '../../img/loading.gif'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { logoutUser } from '../../actions/AuthAction'

const InfoCard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const paramsId = useParams().id

    const [modalOpen, setModalOpen] = useState(false)

    const { user } = useSelector((state) => state.authReducer.authData)
    const { searchUserData, searchUserLoading } = useSelector((state) => state.authReducer)

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/login')
        dispatch(logoutUser())
    }

    return (
        <div className="InfoCard">
            {searchUserLoading
                ? <img src={loadingSpinner} style={{ alignSelf: "center", margin: "3rem 0" }} className='loadingSpinner' alt="Loading..." />
                : <>
                    <div className="InfoHead">
                        <h4>Profile Info</h4>
                        {user._id === paramsId &&
                            <div>
                                <UilPen width='2rem' height='1.4rem' onClick={() => setModalOpen(true)} />
                                <ProfileModal
                                    modalOpen={modalOpen}
                                    setModalOpen={setModalOpen}
                                    data={user}
                                />
                            </div>
                        }
                    </div>

                    <div className="info">
                        <span><b>Status: </b></span>
                        <span>{paramsId !== user._id ? searchUserData.relationship : user.relationship || "N/A"}</span>
                    </div>

                    <div className="info">
                        <span><b>Lives In: </b></span>
                        <span>{paramsId !== user._id ? searchUserData.city : user.city || "N/A"}</span>
                    </div>

                    <div className="info">
                        <span><b>Country: </b></span>
                        <span>{paramsId !== user._id ? searchUserData.country : user.country || "N/A"}</span>
                    </div>

                    <div className="info">
                        <span><b>Works at: </b></span>
                        <span>{paramsId !== user._id ? searchUserData.worksAt : user.worksAt || "N/A"}</span>
                    </div>

                    <button className="button logout-button logout" onClick={handleLogout}>Logout</button>
                </>
            }
        </div>
    )
}

export default InfoCard
