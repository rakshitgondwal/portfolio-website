import React from 'react'
import Pic from '../../../assets/profile.jpg'

const Profile = () => {
  return (
    <div>
        <img src={Pic} className='profilePic md:hue-rotate-180 hover:hue-rotate-0 rounded-lg hover:rotate-2 hover:scale-105 duration-300' alt="myProfilePic" />
    </div>
  )
}

export default Profile