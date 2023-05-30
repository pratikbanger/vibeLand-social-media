import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import User from '../User/User'
import profilePicture from '../../img/profilePicture.jpg'
import loadingSpinner from '../../img/loading.gif'
import { followUnFollowUser } from '../../actions/UserAcion';
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewUser } from '../../actions/UserAcion'
import { searchUserAPI } from '../../Api/UserRequest'
import { useNavigate } from 'react-router-dom'

const FollowersCard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [findUser, setFindUser] = useState("")
    const [searchUser, setSearchUser] = useState("")
    const [searchLoading, setSearchLoading] = useState(false)

    const { user } = useSelector((state) => state.authReducer.authData)
    const { newUserData, fetchUserLoading } = useSelector((state) => state.authReducer)
    const { followLoading } = useSelector((state) => state.authReducer)

    const [isFollowing, setIsFollowing] = useState(false)

    const FollowUser = () => {
        dispatch(followUnFollowUser(findUser.user[0]._id, user._id))
        setIsFollowing((prev) => !prev)
    }

    const handleSearchUser = async (e) => {
        e.preventDefault()
        setSearchLoading(true)
        const { data } = await searchUserAPI(searchUser)
        setFindUser(data)
        setIsFollowing(user.following.includes(data.user[0]._id))
        setSearchLoading(false)
    }

    useEffect(() => {
        dispatch(fetchNewUser())
        // eslint-disable-next-line
    }, [])

    return (
        <div className="FollowersCard">
            {followLoading
                ? <img src={loadingSpinner} style={{ alignSelf: "center", margin: "3rem 0" }} className='loadingSpinner' alt="Loading..." />
                : <>
                    <form onSubmit={handleSearchUser}>
                        <div className='searchFormDiv'>
                            <i className="fa-solid fa-magnifying-glass" style={{ color: "black" }}></i>
                            <input
                                type="text"
                                placeholder='search'
                                value={searchUser}
                                required
                                minLength={2}
                                onChange={(e) => setSearchUser(e.target.value)}
                            />
                            <button type="submit" className='button'>Search</button>
                        </div>
                    </form>

                    {searchLoading
                        ? <img src={loadingSpinner} style={{ alignSelf: "center", margin: "3rem 0" }} className='loadingSpinner' alt="Loading..." />
                        : findUser.success &&
                        <div className="follower">
                            <div style={{cursor: "pointer"}} onClick={()=> navigate(`/profile/${findUser.user[0]._id}`)}>
                                <img className='followerImg' src={findUser.user[0].profilePicture || profilePicture} alt="" />
                                <div className="name">
                                    <span>{findUser.user[0].firstname} {findUser.user[0].lastname}</span>
                                    <span>@{findUser.user[0].username}</span>
                                </div>
                            </div>
                            {user._id !== findUser.user[0]._id &&
                                <button className={isFollowing ? 'button fc-button unfollow-button' : 'button fc-button'} onClick={FollowUser}>{isFollowing ? "Unfollow" : "Follow"}</button>
                            }
                        </div>
                    }
                    {!findUser.success && findUser.length !== 0 &&
                        <div className='noUserFound'>
                            <p >User doesn't exist</p>
                        </div>
                    }

                    <h3 style={{ marginTop: "1rem" }}>People you may know</h3>

                    {fetchUserLoading
                        ? <img src={loadingSpinner} style={{ alignSelf: "center", margin: "5rem 0" }} className='loadingSpinner' alt="Loading..." />
                        : <>
                            {/* eslint-disable-next-line */}
                            {newUserData.map((follower, id) => {
                                if (follower._id !== user._id) {
                                    return (
                                        <User person={follower} key={id} />
                                    )
                                }
                            })}
                        </>
                    }
                </>
            }
        </div>
    )
}

export default FollowersCard
