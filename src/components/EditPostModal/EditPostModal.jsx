import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePostAPI } from '../../Api/PostRequest';
import { fetchMyPost } from '../../actions/PostAction'

const EditPostModal = ({ postData }) => {

    const [desc, setDesc] = useState(postData.desc);
    const [coverImage, setImage] = useState('');

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImage(img)

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

    const handleUpdatePost = () => {
        const updatePost = {
            userId: user._id,
            desc: desc,
            Image: coverImage,
            username: user.username,
            firstname: user.firstname
        }

        const {Image, ...withoutImage} = updatePost

        if (coverImage.length !== 0) {
            updatePostAPI(postData._id, updatePost)
        }
        else{
            updatePostAPI(postData._id, withoutImage)
        }


        setTimeout(() => {
            dispatch(fetchMyPost(user._id))
        }, 1000);
    }

    return (
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabe2" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabe2">Update Post</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Post Description:</label>
                                <textarea class="form-control" id="message-text" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Post Image:</label>
                                <input
                                    class="form-control"
                                    type="file"
                                    name='myImage'
                                    onChange={onImageChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdatePost}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPostModal
