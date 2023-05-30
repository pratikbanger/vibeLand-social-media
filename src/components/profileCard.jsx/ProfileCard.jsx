import React, { useState } from 'react'
import './ProfileCard.css'
import coverPicture from '../../img/coverPicture.jpg'
import profilePicture from '../../img/profilePicture.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ProfileModal from '../ProfileModal/ProfileModal'
import { logoutUser } from '../../actions/AuthAction'

const ProfileCard = ({ location }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentLocation = useLocation().pathname

  const { user } = useSelector((store) => store.authReducer.authData)
  const { userPostData } = useSelector((state) => state.userPostReducer)


  const [modalOpen, setModalOpen] = useState(false)

  const handleLogout = (e) => {
    // e.preventDefault();
    // navigate('/login')
    // dispatch(logoutUser())
    console.log(currentLocation)
  }

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={user.coverPicture === null ? coverPicture : user.coverPicture} alt="" />
        <img src={user.profilePicture === null ? profilePicture : user.profilePicture} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>@{user.username}</span>
        <span>{user.worksAt === null ? "*Update work profession" : user.worksAt}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>Followers</span>
            <span>{user.followers.length}</span>
          </div>

          {/* <div className="vl"></div> */}

          <div className="follow">
            <span>Following</span>
            <span>{user.following.length}</span>
          </div>

          {currentLocation === `/profile/${user._id}` && (
            <>
              <div className="follow">
                <span>Posts</span>
                <span>{userPostData.length}</span>
              </div>
            </>
          )}
        </div>
        <hr />

        <div className='displayNone'>

          <div className="follow">
            <span>Status</span>
            <span>{user.relationship || "N/A"}</span>
          </div>

          <div className="follow">
            <span>Works At</span>
            <span>{user.worksAt || "N/A"}</span>
          </div>

          <div className="follow">
            <span>Lives In</span>
            <span>{user.city || "N/A"}</span>
          </div>

        </div>
        <hr className='displayNone' />

      </div>

      {currentLocation === `/profile/${user._id}`
        ?
        <>
          <div className='profileButtons'>
            <button className="button editProfileButton logout displayNone" onClick={handleLogout}>Logout</button>
            <button className='button editProfileButton' onClick={() => setModalOpen(true)}>Edit Profile</button>
          </div>
          <ProfileModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            data={user}
          />
        </>
        : <Link to={`/profile/${user._id}`} > My Profile</Link>
      }

    </div>
  )
}

export default ProfileCard
