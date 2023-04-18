import React from 'react'
import { useState } from 'react'
import TodoList from '../../components/TodoList/TodoList'
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm'
import './Todo.scss'

const Todo = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) =>{
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }

  return (
    <div className = 'todo-container'>
        <h1>To-Do List</h1>
        <AddTodoForm addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Todo