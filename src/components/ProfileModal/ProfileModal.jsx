import React, { useState } from 'react';
import './ProfileModal.css'
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUserDetail } from '../../actions/UserAcion';

function ProfileModal({ modalOpen, setModalOpen, data }) {

    const [formData, setFormData] = useState({
        _id: data._id,
        firstname: data.firstname,
        lastname: data.lastname,
        worksAt: data.worksAt,
        relationship: data.relationship,
        city: data.city,
        country: data.country,
        profilePicture: data.profilePicture,
        coverPicture: data.coverPicture,
    })

    const dispatch = useDispatch()
    const params = useParams()

    // eslint-disable-next-line
    const [opened, { close }] = useDisclosure(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleUpdateDetails = (e) => {
        e.preventDefault();
        dispatch(updateUserDetail(params.id, formData))
        close(setModalOpen(false))
    }

    return (
        <>
            <Modal opened={modalOpen} onClose={() => close(setModalOpen(false))} title="Update Profile Information" centered size='auto'>
                <form className="infoForm authForm profileModal">

                    <div>
                        <input
                            className='infoInput modalInput'
                            type="text"
                            placeholder='First Name' name='firstname'
                            value={formData.firstname || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            className='infoInput modalInput'
                            type="text"
                            placeholder='Last Name'
                            name='lastname'
                            value={formData.lastname || ""}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <input
                            className='infoInput modalInput'
                            type="text"
                            placeholder='Works At'
                            name='worksAt'
                            value={formData.worksAt || ""}
                            onChange={handleInputChange}
                        />

                        <input
                            className='infoInput modalInput'
                            type="text"
                            placeholder='Relationship Status'
                            name='relationship'
                            value={formData.relationship || ""}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <input
                            className='infoInput modalInput'
                            type="text"
                            placeholder='City'
                            name='city'
                            value={formData.city || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            className='infoInput modalInput'
                            type="text"
                            placeholder='Country'
                            name='country'
                            value={formData.country || ""}
                            onChange={handleInputChange}
                        />

                    </div>

                    <div className='imageInput'>
                        <div className="flex">
                            <h5>Profile Image</h5>
                            <input
                                className='infoInput modalInput'
                                type="file"
                                name='profilePicture'
                                onChange={(e) => {
                                    const image64 = new FileReader();
                                    if (e.target.files && e.target.files[0]) {
                                        image64.readAsDataURL(e.target.files[0])
                                        image64.onload = () => {
                                            setFormData({ ...formData, [e.target.name]: image64.result })
                                        }
                                        image64.onerror = (err) => {
                                            console.log(err)
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className="flex">
                            <h5>Cover Image</h5>
                            <input
                                className='infoInput modalInput'
                                type="file"
                                name='coverPicture'
                                onChange={(e) => {
                                    const image64 = new FileReader();
                                    if (e.target.files && e.target.files[0]) {
                                        image64.readAsDataURL(e.target.files[0])
                                        image64.onload = () => {
                                            setFormData({ ...formData, [e.target.name]: image64.result })
                                        }
                                        image64.onerror = (err) => {
                                            console.log(err)
                                        }
                                    }
                                }}
                            />
                        </div>

                    </div>

                    <button className="button update-button" type="submit" onClick={handleUpdateDetails}>Update</button>
                </form>
            </Modal>
        </>
    );
}

export default ProfileModal
