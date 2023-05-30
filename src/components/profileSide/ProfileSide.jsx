import React from 'react'
import './ProfileSide.css'
import ProfileCard from '../profileCard.jsx/ProfileCard'

const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <ProfileCard location="/home" />
        </div>
    )
}

export default ProfileSide
