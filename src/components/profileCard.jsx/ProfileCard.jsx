import React, { useState } from 'react'
import './ProfileCard.css'
import loadingSpinner from '../../img/loading.gif'
import coverPicture from '../../img/coverPicture.jpg'
import profilePicture from '../../img/profilePicture.jpg'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ProfileModal from '../ProfileModal/ProfileModal'
import { logoutUser } from '../../actions/AuthAction'
import { followUserList } from '../../actions/UserAcion'

const ProfileCard = ({ location }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentLocation = useLocation().pathname
  const paramsId = useParams().id

  const [modalOpen, setModalOpen] = useState(false)

  const { user } = useSelector((store) => store.authReducer.authData)
  const { searchUserData, searchUserLoading } = useSelector((store) => store.authReducer)
  const { userPostData } = useSelector((state) => state.userPostReducer)

  const handleFollowersList = () => {

    dispatch(followUserList(paramsId))
    navigate(`/profile/followers/${paramsId}`)
  }

  const handleLogout = (e) => {
    e.preventDefault();

    navigate('/login')
    dispatch(logoutUser())
  }

  return (
    <div className="ProfileCard">
      {searchUserLoading
        ? <img src={loadingSpinner} style={{ alignSelf: "center", margin: "3rem 0" }} className='loadingSpinner' alt="Loading..." />
        : <>
          <div className="ProfileImages">
            <img src={paramsId !== user._id && location === "profilePage" ? searchUserData.coverPicture : user.coverPicture === null ? coverPicture : user.coverPicture} alt="" />
            <img src={paramsId !== user._id && location === "profilePage" ? searchUserData.profilePicture : user.profilePicture === null ? profilePicture : user.profilePicture} alt="" />
          </div>

          <div className="ProfileName">
            <span>{paramsId !== user._id && location === "profilePage" ? searchUserData.firstname : user.firstname} {paramsId !== user._id && location === "profilePage" ? searchUserData.lastname : user.lastname}</span>
            <span>@{paramsId !== user._id && location === "profilePage" ? searchUserData.username : user.username}</span>
            <span>{paramsId !== user._id && location === "profilePage" ? searchUserData.worksAt : user.worksAt === null ? "*Not Updated" : user.worksAt}</span>
          </div>

          <div className="followStatus">
            <hr />
            <div>
              <div style={{cursor: "pointer"}} onClick={handleFollowersList} className="follow">
                <span>Followers</span>
                <span>{paramsId !== user._id && location === "profilePage" ? searchUserData.followers.length : user.followers.length}</span>
              </div>

              {/* <div className="vl"></div> */}

              <div style={{cursor: "pointer"}} onClick={() => navigate(`/profile/following/${user._id}`)} className="follow">
                <span>Following</span>
                <span>{paramsId !== user._id && location === "profilePage" ? searchUserData.following.length : user.following.length}</span>
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
                <span>{paramsId !== user._id && location === "profilePage" ? searchUserData.relationship : user.relationship || "N/A"}</span>
              </div>

              <div className="follow">
                <span>Works At</span>
                <span>{paramsId !== user._id && location === "profilePage" ? searchUserData.worksAt : user.worksAt || "N/A"}</span>
              </div>

              <div className="follow">
                <span>Lives In</span>
                <span>{paramsId !== user._id && location === "profilePage" ? searchUserData.city : user.city || "N/A"}</span>
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
            : currentLocation !== `/profile/${user._id}` && location !== "profilePage"
            && <Link to={`/profile/${user._id}`} >My Profile</Link>
          }
        </>
      }
    </div>
  )
}

export default ProfileCard
