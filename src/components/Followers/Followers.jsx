import React from 'react'
import './Followers.css'
import loadingSpinner from '../../img/loading.gif'
import InfoCard from '../InfoCard/InfoCard'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useSelector } from 'react-redux'
import FollowUserList from '../FollowUserList/FollowUserList'

const Followers = () => {

    const { followUserList, followUserListLoading } = useSelector((state) => state.authReducer)

    return (
        <div className='Followers'>
            <div className='mobileDevice'>
                <InfoCard />
            </div>
            <div>
                <NavigationBar />

                <div className="followersList">
                    {followUserListLoading
                        ? <img src={loadingSpinner} style={{ alignSelf: "center", margin: "3rem 0" }} className='loadingSpinner' alt="Loading..." />
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
