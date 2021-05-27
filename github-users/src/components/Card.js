import React from 'react';
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className='github-profile'>
        <img
          src={profile.avatar_url}
          width='100'
          height='100'
          alt='cross.jpg'
        />
        <div className='details'>
          <p className='name'>{profile.name}</p>
          <p className='bio'>{profile.bio}</p>
        </div>
      </div>
    );
  }
}

export default Card;
