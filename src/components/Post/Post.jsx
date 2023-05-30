import React, { useState } from 'react'
import './Post.css'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../Api/TimelinePostsRequest'

const Post = ({ data }) => {

    const { user } = useSelector((state) => state.authReducer.authData)

    const [liked, setLiked] = useState(data.likes.includes(user._id))
    const [likesCount, setlikesCount] = useState(data.likes.length)

    const handlePostLike = () => {
        setLiked(!liked)
        likePost(data._id, user._id)
        liked ? setlikesCount((prev) => prev - 1) : setlikesCount((prev) => prev + 1)
    }

    return (
        <div className="Post">
            <img src={data.Image} alt="" />

            <div className="postReact">
                <img src={liked ? Like : NotLike} alt="Like" onClick={handlePostLike} />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: 'var(--gray)', fontSize: '14px' }} >{likesCount} Likes</span>

            <div className="details">
                <span><b>{data.username}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

export default Post
