import React from 'react';
import CardList from '../src/components/CardList';
import Form from '../src/components/Form';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div class='container'>
        <h1 className='title'>The Github Card Users</h1>
        <Form />
        <CardList />
      </div>
    );
  }
}

export default App;
