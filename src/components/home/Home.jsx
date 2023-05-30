import React from 'react'
import './Home.css'
import ProfileSide from '../profileSide/ProfileSide'
import NavigationBar from '../NavigationBar/NavigationBar'
import PostSide from '../PostSide/PostSide'

const Home = () => {
    return (
        <div className='Home'>
            <div className='mobileDevice'>
                <ProfileSide />
            </div>
            <div>
                <NavigationBar />
                <PostSide />
            </div>
        </div>
    )
}

export default Home
