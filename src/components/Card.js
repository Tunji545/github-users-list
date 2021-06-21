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
      <div className='image'>
        <img
          src={profile.avatar_url}
          width='200'
          height='200'
          alt='cross.jpg'
        />
        <p className='name1'>{profile.name}</p>
      </div>
      <div className='flex'>
        <div className='details-left'>
          <p className='name'>{profile.name}</p>
          <p className='followers'>Followers: {profile.followers}</p>
          <p className='repos'>Repos Counts: {profile.public_repos}</p>
        </div>
        <div className='details-right'>
          <button
            className='title  margin'
            onClick={() => getRepoUrls(profile.repos_url)}
          >
            <ul>
              {repos.map((starred) => (
                <>
                  <li>
                    <span>Name of Repo:</span> {starred.full_name}
                  </li>
                  <li>
                    <span>Starred?</span>{' '}
                    {starred.stargazers_count > 1 ? 'YES' : 'NO'}
                  </li>
                  <li>
                    <span>STARS COUNT:</span>
                    {starred.stargazers_count}
                  </li>
                  <hr />
                </>
              ))}
            </ul>
            <span className='title'>STARRED REPOS</span>
          </button>
        </div>
        <div className='details'>
          <button
            className='title  margin'
            onClick={() => forkedRepos(profile.repos_url)}
          >
            <ul className='row'>
              {forks.map((forked) => (
                <>
                  <li>
                    <span>Name of Repo:</span> {forked.full_name}
                  </li>
                  <li>
                    <span>Forked? </span>{' '}
                    {forked.forks_count > 0 ? 'YES' : 'NO'}
                  </li>
                  <li>
                    <span>Forked Count: </span> {forked.forks_count}
                  </li>
                  <hr />
                </>
              ))}
            </ul>
            <span className='title'>Forked REPOS</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
