import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './Contexts'


function App() {
  const [Todos, setTodos] = useState([]);

  const createTodo = () => {
    setTodos((prev) => [{ id: Date.now(), ...Todos, completed: false }, ...prev])
  }
  const updateTodo = (id, Todos) => {
    setTodos((prevTodo) => prevTodo.map((prevTO) => (
      prevTO.id === id ? Todos : prevTO
    )))
  }
  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((prevTo)=>prevTo.id!=id))
  }
  const checkTodo = () => {

  }

  return (
    <TodoContextProvider value={{ Todos, createTodo, updateTodo, deleteTodo, checkTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
