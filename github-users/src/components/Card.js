import React from 'react';
import dataJson from './dataJson';
class Card extends React.Component {
  render() {
    const profile = { ...dataJson[0] };
    return (
      <div className='github-profile'>
        <img src={profile.avatar_url} alt='cross.jpg' />
        <div className='details'>
          <p className='name'>{profile.name}</p>
          <p className='bio'>{profile.bio}</p>
        </div>
      </div>
    );
  }
}

export default Card;
