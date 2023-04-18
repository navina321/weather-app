import React from 'react'
import { useState } from 'react'
import './AddTodoForm.scss'

const AddTodoForm = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }
  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }

    return (
    <div className = "add-todo-component">
        <form className = 'add-todo-form' onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button>+</button>
        </form>
    </div>
  )
}

export default AddTodoForm