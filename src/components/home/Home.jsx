import React from 'react'
import './Home.css'
import ProfileCard from '../profileCard.jsx/ProfileCard'
import NavigationBar from '../NavigationBar/NavigationBar'
import PostSide from '../PostSide/PostSide'

const Home = () => {
    return (
        <div className='Home'>
            <div className='mobileDevice'>
                <ProfileCard location="homePage" />
            </div>
            <div>
                <NavigationBar />
                <PostSide />
            </div>
        </div>
    )
}

export default Home
