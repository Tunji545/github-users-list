import React, { useState } from 'react';
import API from './utils/API';

const Form = (props) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await API.get(`/${userName}`);
    console.log(resp);

    props.onSubmit(resp.data);
    setUserName('');
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Github Users'
        value={userName}
        required
        onChange={handleChange}
      />
      <button>Search User</button>
    </form>
  );
};

export default Form;
