import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import './Post.css';

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://images.unsplash.com/photo-1581704906775-891dd5207444?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Lawrence Lucky{' '}
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' />
                @lawrencelucky
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>I challenge yoou to build a twitter clone with React</p>
          </div>
        </div>
        <img
          src='https://media3.giphy.com/media/65Tdpi3clAdjomZ39/giphy.gif'
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatRoundedIcon fontsize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
};

export default Post;
