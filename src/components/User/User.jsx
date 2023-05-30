import React, { useState } from 'react'
import profilePicture from '../../img/profilePicture.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { followUnFollowUser, searchUserProfile } from '../../actions/UserAcion';
import { useNavigate } from 'react-router-dom';

const User = ({ person }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(user.following.includes(person._id))

    const handleFollowUser = () => {
        dispatch(followUnFollowUser(person._id, user._id))
        setFollowing((prev) => !prev)
    }

    return (
        <div className="follower">
            <div style={{cursor: "pointer"}} onClick={()=> {navigate(`/profile/${person._id}`); dispatch(searchUserProfile(person._id))}}>
                <img className='followerImg' src={person.profilePicture || profilePicture} alt="" />
                <div className="name">
                    <span>{person.firstname} {person.lastname}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className={following ? 'button fc-button unfollow-button' : 'button fc-button'} onClick={handleFollowUser}>{following ? "Unfollow" : "Follow"}</button>
        </div>
    )
}

export default User
