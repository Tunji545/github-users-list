import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await axios.get(`https://api.github.com/users/${userName}`);

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
      <button>Add Card</button>
    </form>
  );
};

export default Form;
