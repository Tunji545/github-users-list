import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className='form'>
        <input type='text' placeholder='Github Users' />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
