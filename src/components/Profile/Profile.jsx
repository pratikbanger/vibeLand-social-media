import React from 'react'
import './Profile.css'
import ProfileLeft from '../ProfileLeft/ProfileLeft'
import ProfileCard from '../profileCard.jsx/ProfileCard'
import PostSide from '../PostSide/PostSide'
import NavigationBar from '../NavigationBar/NavigationBar'

const Profile = () => {
    return (
        <div className="Profile">

            <div className='mobileDevice'>
                <ProfileLeft />
            </div>

            <div>
                <NavigationBar />
                <div className="Profile-center">

                    <ProfileCard />
                    <PostSide />
                </div>
            </div>
        </div>
    )
}

export default Profile
