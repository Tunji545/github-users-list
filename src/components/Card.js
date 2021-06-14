import React, { useState } from 'react';
import axios from 'axios';
const Card = (props) => {
  const [repos, setRepos] = useState([]);
  const [forks, setForks] = useState([]);
  const getRepoUrls = async (url) => {
    const resp = await axios.get(url);
    console.log(resp);
    console.log(resp.data);
    var result = resp.data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4);

    console.log(result);
    setRepos(result);
  };

  const forkedRepos = async (url) => {
    const resp = await axios.get(url);
    var response = resp.data.sort((a, b) => b.forks - a.forks).slice(0, 4);
    console.log(response);
    setForks(response);
  };
  const profile = props;
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
          onClick={() => getRepoUrls(profile.repos_url)}
        >
          <ul>
            {repos.map((starred) => (
              <>
                <li>{starred.full_name}</li>
                <li key={starred.id}>
                  {starred.stargazers_count > 1 ? 'YES' : 'NO'}
                </li>
                <li key={starred.id}>STARS COUNT:{starred.stargazers_count}</li>
              </>
            ))}
          </ul>
          STARRED REPOS
        </button>
        <div className='details'>
          <button
            className='starred'
            onClick={() => forkedRepos(profile.repos_url)}
          >
            <ul className='row'>
              {forks.map((forked) => (
                <>
                  <li>{forked.full_name}</li>
                  <li key={forked.id}>
                    Forked? {forked.forks_count > 0 ? 'YES' : 'NO'}
                  </li>
                  <li key={forked.id}>Number of Forks: {forked.forks_count}</li>
                </>
              ))}
            </ul>
            Forked REPOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
