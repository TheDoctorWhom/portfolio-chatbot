import React from 'react';
import './UserAvatar.css';
import AvatarImg from './man-avatar-svgrepo-com.svg';

const UserAvatar = () => {

  return (
    <div class="react-chatbot-kit-user-avatar-container">
      <img className ="" width='40px' src={AvatarImg}/>
    </div>
  );

}

export default UserAvatar;
