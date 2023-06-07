import React, { useState } from 'react'
import './Post.css'
import { IconTrash, IconEdit } from '@tabler/icons-react';
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../Api/TimelinePostsRequest'
import DeleteModal from '../DeleteModal/DeleteModal';

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

            <div className='moreOptions'>
                <div className="postReact">
                    <img src={liked ? Like : NotLike} alt="Like" onClick={handlePostLike} />
                    <img src={Comment} alt="" />
                    <img src={Share} alt="" />
                </div>

                <div>
                    <div className="nav-item dropdown">
                        <i style={{ cursor: "pointer" }} className="fa-solid fa-ellipsis-vertical nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>

                        <ul className="dropdown-menu">
                            <label className="optionLabel">Post Options</label>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item"><IconEdit size={16} /> Edit Post</button></li>
                            <li><button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><IconTrash size={16} /> Delete Post</button></li>
                        </ul>
                        <DeleteModal postId={data} />
                    </div>
                </div>
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
