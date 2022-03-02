import React from 'react';
import './BotAvatar.css';
import AvatarImg from './avatar.jpg';

const BotAvatar = () => {

  return (
    <div className = "bot-avatar">
      <img className ="bot-avatar" width='55px' src={AvatarImg}/>
    </div>
  );

}

export default BotAvatar;
