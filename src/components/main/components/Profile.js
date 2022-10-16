import React from 'react'
import Pic from '../../../assets/profile.jpg'

const Profile = () => {
  return (
    <div>
        <img src={Pic} className='profilePic rounded-lg' alt="myProfilePic" />
    </div>
  )
}

export default Profile