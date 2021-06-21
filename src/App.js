import React, { useState } from 'react';
import CardList from '../src/components/CardList';
import Form from '../src/components/Form';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  const addNewUser = (profileData) => {
    setData([profileData]);
  };

  return (
    <div className='container'>
      <h1 className='title'>The Github Card Users</h1>
      <Form onSubmit={addNewUser} />
      <CardList profiles={data} />
    </div>
  );
};

export default App;
