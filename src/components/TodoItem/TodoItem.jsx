import React from 'react'
import './TodoItem.scss'

const TodoItem = ({ index, todo, deleteTodo }) => {
  return (
    <div className = 'todo-item'>
        <span>{todo}</span>
        <button onClick={() => deleteTodo(index)}>X</button>
    </div>
  )
}

export default TodoItem