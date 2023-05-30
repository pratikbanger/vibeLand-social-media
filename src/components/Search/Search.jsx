import React from 'react'
import './Search.css'
import ProfileCard from '../profileCard.jsx/ProfileCard'
import NavigationBar from '../NavigationBar/NavigationBar'
import FollowersCard from '../FollowersCard/FollowersCard'

const Search = () => {
    return (
        <div className='Search'>
            <div className='mobileDevice'>
                <ProfileCard location="searchPage" />
            </div>
            <div>
                <NavigationBar />
                <div className='followersCardDiv'>
                    <FollowersCard />
                </div>
            </div>
        </div>
    )
}

export default Search