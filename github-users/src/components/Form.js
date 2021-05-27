import React from 'react';

class Form extends React.Component {
  state = {
    userName: '',
  };

  userNameInput = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      userName: event.target.value,
    });
    console.log(this.userNameInput.current.value);
  };

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Github Users'
          required
          ref={this.userNameInput}
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
