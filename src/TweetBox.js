import React, { useState } from 'react';
import { Button, Avatar } from '@material-ui/core';
import firebase from 'firebase';

import './TweetBox.css';

import db from './firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Lawrence',
      username: '_lawrencelucky',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://images.unsplash.com/flagged/photo-1553056011-7811272649cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGN1dGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTweetImage('');
    setTweetMessage('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://images.unsplash.com/photo-1581704906775-891dd5207444?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
          <input
            type='text'
            value={tweetMessage}
            placeholder={`What's happening`}
            onChange={e => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          value={tweetImage}
          placeholder='Optional: Enter image URL'
          onChange={e => setTweetImage(e.target.value)}
        />
        <Button
          type='submit'
          className='tweetBox__tweetButton'
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
