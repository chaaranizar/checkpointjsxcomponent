import React from 'react'
import { Figure } from 'react-bootstrap'
import profilephoto from "../Assets/DSC_9092 copy.jpg";
import './ProfilePhoto.css';
export const ProfilePhoto = () => {
  return (
    <div className='image'>
         <Figure>
      <Figure.Image
        width={371}
        height={380}
        alt="picture"
        src={profilephoto}
      />
        </Figure>
    </div>
  )
}
