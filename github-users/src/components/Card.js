import React from 'react';
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className='wrapper'>
        <div className='github-profile-left'>
          <img
            src={profile.avatar_url}
            width='200'
            height='200'
            alt='cross.jpg'
          />
          <div className='details'>
            <p className='name'>{profile.name}</p>
            <p className='followers'>Followers: {profile.followers}</p>
          </div>
        </div>
        <div className='github-profile-right'>
          <p className='top-4'>Forked Repos: {profile.repos_url}</p>
          <div className='details'>
            <p className='repositories'>
              Repositories Counts: {profile.public_repos}
            </p>
            <p className='starred'>Stars: {profile.repos_url}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
