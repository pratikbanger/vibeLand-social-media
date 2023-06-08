import React from 'react'
import { deletePostAPI } from '../../Api/PostRequest'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyPost } from '../../actions/PostAction'

const DeleteModal = ({ postId }) => {


    const { user } = useSelector((store) => store.authReducer.authData)
    const dispatch = useDispatch();

    const handleDeletePost = () => {

        deletePostAPI(postId._id, user._id)
        dispatch(fetchMyPost(user._id))
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Post</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this Post?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDeletePost}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
