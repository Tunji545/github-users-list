import React from 'react';
import axios from 'axios';
class Card extends React.Component {
  state = {
    repos: [],
    forks: [],
  };
  getRepoUrls = async (url) => {
    const resp = await axios.get(url);
    var result = resp.data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4);

    console.log(result);
    this.setState({ repos: result });
  };

  forkedRepos = async (url) => {
    const resp = await axios.get(url);
    var response = resp.data.sort((a, b) => b.forks - a.forks).slice(0, 4);
    console.log(response);
    this.setState({ forks: response });
  };
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
            <p className='repositories'>
              Repositories Counts: {profile.public_repos}
            </p>
          </div>
        </div>
        <div className='github-profile-right'>
          <button
            className='top-4'
            onClick={() => this.getRepoUrls(profile.repos_url)}
          >
            <ul>
              {this.state.repos.map((starred) => (
                <>
                  <li>{starred.full_name}</li>
                  <li key={starred.id}>
                    {starred.stargazers_count > 1 ? 'YES' : 'NO'}
                  </li>
                  <li key={starred.id}>
                    STARS COUNT:{starred.stargazers_count}
                  </li>
                </>
              ))}
            </ul>
            STARRED REPOS
          </button>
          <div className='details'>
            <button
              className='starred'
              onClick={() => this.forkedRepos(profile.repos_url)}
            >
              <ul className='row'>
                {this.state.forks.map((forked) => (
                  <>
                    <li>{forked.full_name}</li>
                    <li key={forked.id}>
                      Forked? {forked.forks_count > 0 ? 'YES' : 'NO'}
                    </li>
                    <li key={forked.id}>
                      Number of Forks: {forked.forks_count}
                    </li>
                  </>
                ))}
              </ul>
              Forked REPOS
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
