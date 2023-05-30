import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../Post/Post'
import loadingSpinner from '../../img/loading.gif'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTimelinePosts } from '../../actions/TimelinePostsAction'
import { fetchMyPost } from '../../actions/PostAction'
import { Link, useLocation, useParams } from 'react-router-dom'
import { myPostAPI } from '../../Api/PostRequest'
import { useState } from 'react'

const Posts = () => {

    const params = useParams().id
    const location = useLocation().pathname;

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData)
    const { timelinePostData, loading } = useSelector((state) => state.timelinePostReducer)
    const { userPostData, myPostLoading } = useSelector((state) => state.userPostReducer)

    const [searchUserPosts, setSearchUserPosts] = useState([])
    const [searchUserPostsLoading, setSearchUserPostsLoading] = useState(false)

    const getSearchUserPost = async () => {
        setSearchUserPostsLoading(true)
        const { data } = await myPostAPI(params)
        setSearchUserPosts(data.posts)
        setSearchUserPostsLoading(false)
    }

    useEffect(() => {

        if (location === `/profile/${user._id}`) {
            dispatch(fetchMyPost(user._id))
        }
        else if (params !== user._id && location !== "/" && location !== "/home") {
            getSearchUserPost();
        }
        else {
            dispatch(fetchTimelinePosts(user._id))
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="Posts">
            {loading || myPostLoading || searchUserPostsLoading
                ? <div className='loadingDiv'>
                    <img className='timelineLoading' src={loadingSpinner} alt="Loading post" />
                </div>
                : location === `/profile/${user._id}`
                    ? userPostData.length === 0
                        ? <div className='noPostMsg'>
                            <p >You haven't posted anything yet! share your first post.</p>
                        </div>
                        : userPostData.map((post) => {
                            return (
                                <Post data={post} key={post._id} />
                            )
                        })
                    : params !== user._id && location !== "/" && location !== "/home"
                        ? searchUserPosts.length === 0
                            ? <div className='noPostMsg'>
                                <p>User haven't posted anything yet!.
                                    <Link to="/search">Search</Link>
                                </p>
                            </div>
                            : searchUserPosts.map((post) => {
                                return (
                                    <Post data={post} key={post._id} />
                                )
                            })

                        : timelinePostData.length === 0
                            ? <div className='noPostMsg'>
                                <p >Add friends to see their latest post on feed.
                                    <Link to="/search">Search</Link>
                                </p>
                            </div>
                            : timelinePostData.map((post) => {
                                return (
                                    <Post data={post} key={post._id} />
                                )
                            })

            }
        </div>
    )
}

export default Posts