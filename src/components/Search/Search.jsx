import React from 'react'
import './Search.css'
import ProfileSide from '../profileSide/ProfileSide'
import NavigationBar from '../NavigationBar/NavigationBar'
import FollowersCard from '../FollowersCard/FollowersCard'

const Search = () => {
    return (
        <div className='Search'>
            <div className='mobileDevice'>
                <ProfileSide />
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