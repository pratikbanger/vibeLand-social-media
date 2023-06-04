import React, { useState } from 'react'
import './FollowUserList.css'
import profilePicture from '../../img/profilePicture.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { followUnFollowUser, searchUserProfile } from '../../actions/UserAcion';
import { useNavigate } from 'react-router-dom';

const FollowUserList = ({ userId }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(user.following.includes(userId._id))


    const handleFollowUser = () => {
        dispatch(followUnFollowUser(userId._id, user._id))
        setFollowing((prev) => !prev)
    }

    return (
        <div className="follower">
            <div style={{ cursor: "pointer" }} onClick={() => { navigate(`/profile/${userId._id}`); dispatch(searchUserProfile(userId._id)) }}>
                <img className='followerImg' src={userId.profilePicture || profilePicture} alt="" />
                <div className="name">
                    <span>{userId.firstname} {userId.lastname}</span>
                    <span>@{userId.username}</span>
                </div>
            </div>
            <button className={following ? 'button fc-button unfollow-button' : 'button fc-button'} onClick={handleFollowUser}>{following ? "Unfollow" : "Follow"}</button>
        </div>
    )
}

export default FollowUserList
