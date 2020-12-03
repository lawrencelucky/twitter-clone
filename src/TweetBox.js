import React from 'react';
import { Button, Avatar } from '@material-ui/core';

import './TweetBox.css';

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://images.unsplash.com/photo-1581704906775-891dd5207444?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
          <input type='text' placeholder={`What's happening`} />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          placeholder='Optional: Enter image URL'
        />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
