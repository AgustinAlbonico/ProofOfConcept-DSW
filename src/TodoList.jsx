import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([
    { done: false, text: 'Aprender React' },
    { done: false, text: 'Ir al supermercado' },
    { done: false, text: 'Estudiar SQL' },
  ])

  const addTodo = () => {
    setTodos([...todos, { done: false, text: '' }])
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done))
  }

  const remaining = todos.filter((todo) => !todo.done).length

  return (
    <div className='todolist'>
      {todos.map((todo, index) => (
        <div key={index} className='task-item'>
          <input
            type='checkbox'
            checked={todo.done}
            onChange={() => {
              const newTodos = [...todos]
              newTodos[index].done = !newTodos[index].done
              setTodos(newTodos)
            }}
          />
          <input
            className='task-text'
            type='text'
            placeholder='Qué tarea quieres agregar?'
            value={todo.text}
            onChange={(e) => {
              const newTodos = [...todos]
              newTodos[index].text = e.target.value
              setTodos(newTodos)
            }}
            disabled={todo.done}
          />
        </div>
      ))}
      {todos.length === 0 ? (
        <p className='remaining-text'>No tienes más tareas, felicitaciones!</p>
      ) : (
        <p className='remaining-text'>{remaining} restantes</p>
      )}
      <div className='buttons'>
        <button onClick={addTodo}>Añadir</button>
        <button onClick={clearCompleted}>Borrar completadas</button>
      </div>
    </div>
  )
}

export default TodoList
