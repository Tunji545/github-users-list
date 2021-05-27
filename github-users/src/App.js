import React from 'react';
import CardList from '../src/components/CardList';
import Form from '../src/components/Form';
import './App.css';
import dataJson from './components/dataJson';

class App extends React.Component {
  state = {
    data: dataJson,
  };

  componentDidMount() {}
  render() {
    return (
      <div className='container'>
        <h1 className='title'>The Github Card Users</h1>
        <Form />
        <CardList profiles={this.state.data} />
      </div>
    );
  }
}

export default App;
