import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProfileUser } from '../../Api/UserRequest'
import { logoutUser } from '../../actions/AuthAction'

const InfoCard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const paramsId = useParams().id

    const [modalOpen, setModalOpen] = useState(false)
    const [profileUser, setProfileUser] = useState({})

    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        
        const fetchProfileUser = async () => {
            if (paramsId !== user._id) {
                const { data } = await getProfileUser(paramsId)
                setProfileUser(data.otherDetails)
            }
            else {
                setProfileUser(user)
            }
        }
        fetchProfileUser()
        // eslint-disable-next-line
    }, [])

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/login')
        dispatch(logoutUser())
    }

    return (
        <div className="InfoCard">
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
                <span>{profileUser.relationship !== null ? profileUser.relationship : "____"}</span>
            </div>

            <div className="info">
                <span><b>Lives In: </b></span>
                <span>{profileUser.city !== null ? profileUser.city : "____"}</span>
            </div>

            <div className="info">
                <span><b>Country: </b></span>
                <span>{profileUser.country !== null ? profileUser.country : "____"}</span>
            </div>

            <div className="info">
                <span><b>Works at: </b></span>
                <span>{profileUser.worksAt !== null ? profileUser.worksAt : "____"}</span>
            </div>

            <button className="button logout-button logout" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default InfoCard
