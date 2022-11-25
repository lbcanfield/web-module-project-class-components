import React from 'react'
import TodoList from '../components/TodoList';
import Form from '../components/Form';


const tasks = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }
  // Class methods to update state
  addTask = (event, task) => {
    event.preventDefault();
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    }
    this.setState(
      { ...this.state, tasks: [...this.state.tasks, newTask] }
    );
  }

  toggleTask = taskId => {
    console.log(taskId);
    this.setState({
      ...this.state, tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed }
        }
        return task;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state, tasks: this.state.tasks.filter(task => {
        if (!task.completed) {
          return task;
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todos:</h2>
          <TodoList toggleTask={this.toggleTask} tasks={this.state.tasks} />
        </div>
        <Form addTask={this.addTask} />
        <button onClick={this.clearCompleted} className="clear-btn">Hide Completed</button>
      </div>
    );
  }
}


export default App;