import React from 'react'
import Todo from '../components/Todo';

const TodoList = props => {
  return (
    <div id='todos' className='todo'>
      {props.tasks.map(task => (
        <Todo toggleTask={props.toggleTask} key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TodoList;