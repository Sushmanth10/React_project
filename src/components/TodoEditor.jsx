import React, { useState } from 'react'
import useTodoStore from '../stores/useTodoStore'

const TodoEditor = () => {
  const [todotext, setTodotext] = useState("");
  const createTodo = useTodoStore((state) => (state.createTodo))
  const handleTodoTextChange = (event) => {
    setTodotext(event.target.value); 
  }

  const handleTodoSubmission = () => {
    try {
      event.preventDefaut();
      createTodo(todotext)
    } catch (error) {
      console.error(error);
    }finally{
      setTodotext("");
    }
  }

  return (
    <>
    <form onSubmit={handleTodoSubmission}>
      <input className="border border-amber-300 bg-red-50 text-black p-2" value={todotext} onChange={handleTodoTextChange} type="text"/>
      <button className="bg-red-600 text-white rounded-md p-3" type="submit">Add Todo</button>
    </form>
    </>
  )
}

export default TodoEditor