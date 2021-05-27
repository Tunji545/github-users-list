import React from 'react';

class Form extends React.Component {
  state = {
    userName: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
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
