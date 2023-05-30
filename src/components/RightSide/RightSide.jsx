import React, { useState } from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Notification from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import { Link } from 'react-router-dom'

const RightSide = () => {


  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="/home">
          <img src={Home} alt="" />
        </Link>
        <UilSetting />
        <img src={Notification} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <button className="button r-button" onClick={() => setModalOpen(true)}>Share</button>
    </div>
  )
}

export default RightSide
