import React from 'react';
import './BotAvatar.css';
import AvatarImg from './account-avatar.svg';

const BotAvatar = () => {

  return (
    <div className = "bot-avatar">
      <img className ="bot-avatar" alt="Bot Avatar" width='55px' src={AvatarImg}/>
    </div>
  );

}

export default BotAvatar;
