import React from 'react'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({ ...this.state, task: event.target.value })
  };

  submitForm = event => {
    event.preventDefault();
    this.props.addTask(event, this.state.task);
    this.setState({ ...this.state, task: '' });
  }



  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="task"
          placeholder='Type todo'
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}


export default Form;