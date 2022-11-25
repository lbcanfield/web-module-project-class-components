import React from 'react'


const tasks = [];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      id: '',
      completed: false
    }
  }
  render() {
    return (
      <div>
        Todo App
      </div>
    )
  }
}
