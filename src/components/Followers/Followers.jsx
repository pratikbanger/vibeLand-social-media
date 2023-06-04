import React from 'react'
import './Followers.css'
import loadingSpinner from '../../img/loading.gif'
import InfoCard from '../InfoCard/InfoCard'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useSelector } from 'react-redux'
import FollowUserList from '../FollowUserList/FollowUserList'

const Followers = () => {

    const { followUserList, followUserListLoading } = useSelector((state) => state.authReducer)
    const { followLoading } = useSelector((state) => state.authReducer)

    return (
        <div className='Followers'>
            <div className='mobileDevice'>
                <InfoCard />
            </div>
            <div>
                <NavigationBar />

                <div className="followersList">
                    {followUserListLoading || followLoading
                        ? <div className='loadingDiv'>
                            <img className='timelineLoading' src={loadingSpinner} alt="Loading post" />
                        </div>
                        : followUserList.map((userId) => {
                            return (
                                <FollowUserList userId={userId} key={userId._id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Followers
