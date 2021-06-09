import React from 'react';
import CardList from '../src/components/CardList';
import Form from '../src/components/Form';
import './App.css';

class App extends React.Component {
  state = {
    data: [],
  };

  addNewUser = (profileData) => {
    this.setState((prevState) => ({
      data: [...prevState.data, profileData],
    }));
  };

  render() {
    return (
      <div className='container'>
        <h1 className='title'>The Github Card Users</h1>
        <Form onSubmit={this.addNewUser} />
        <CardList profiles={this.state.data} />
      </div>
    );
  }
}

export default App;
