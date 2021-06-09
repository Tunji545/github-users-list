import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = {
    userName: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );

    this.props.onSubmit(resp.data);
    this.setState({
      userName: '',
    });
  };

  handleChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Github Users'
          required
          onChange={this.handleChange}
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
