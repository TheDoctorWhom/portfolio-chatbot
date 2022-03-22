import React from 'react';
import './UserAvatar.css';
import AvatarImg from './man-avatar-svgrepo-com.svg';

const UserAvatar = () => {

  return (
    <div className="react-chatbot-kit-user-avatar-container">
      <img className="" alt="User Avatar" width='40px' src={AvatarImg}/>
    </div>
  );

}

export default UserAvatar;
