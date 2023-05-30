import React, { useState, useRef } from 'react'
import { UilScenery, UilTimes } from '@iconscout/react-unicons'
import './PostShare.css'
import loadingSpinner from '../../img/loading.gif'
import profilePicture from '../../img/profilePicture.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { createNewPost } from '../../actions/PostAction'

const PostShare = () => {

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.createPostReducer.loading)

    const [img, setImg] = useState(null)
    const [Image, setImage] = useState(null)
    const imageRef = useRef()
    const descRef = useRef()

    const { user } = useSelector((state) => state.authReducer.authData)

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImg(img)

            const image64 = new FileReader();
            image64.readAsDataURL(img);
            image64.onload = () => {
                setImage(image64.result)
            }
            image64.onerror = (errors) => {
                console.log("Error: " + errors)
            }
        }
    }

    const handleSharePost = (e) => {
        e.preventDefault()

        const newPost = {
            userId: user._id,
            desc: descRef.current.value,
            Image: Image,
            username: user.username,
            firstname: user.firstname
        }

        dispatch(createNewPost(newPost, user._id))

        setImg(null)
        setImage(null)
        descRef.current.value = ""
    }

    return (
        <div className="PostShare">
            <img src={user.profilePicture === null ? profilePicture : user.profilePicture} alt="" />
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="What's on your mind"
                        ref={descRef}
                        required
                        min={2}
                    />
                    <div className="postOptions">
                        <div className="moreOption">
                            <div className="option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
                                <UilScenery />
                                Photo
                            </div>

                            {!loading
                                ? <button type="submit" className="button ps-buttons" onClick={handleSharePost}>Share</button>
                                : <img className='loadingSpinner' src={loadingSpinner} alt="loading..." />
                            }
                        </div>

                        <div style={{ display: "none" }}>
                            <input
                                type="file"
                                name='myImage'
                                ref={imageRef}
                                onChange={onImageChange}
                            />
                        </div>
                    </div>
                </form>
                {img && (
                    <div className="previewImage">
                        <UilTimes onClick={() => setImg(null)} />
                        <img src={URL.createObjectURL(img)} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare
