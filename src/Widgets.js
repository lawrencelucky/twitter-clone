import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'858551177860055040'} />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='_lawrencelucky'
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
};

export default Widgets;
