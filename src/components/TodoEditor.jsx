import { useState } from 'react'
import AppwriteTablesDB from '../appwrite-services/AppwriteTablesdb';
import { useMutation } from '@tanstack/react-query';
import queryClient from '../utils/queryClient';
import { Bounce, toast } from 'react-toastify';

const TodoEditor = () => {
  const [todotext, setTodotext] = useState("");
  const appWriteTablesDb = new AppwriteTablesDB();

  const createNewTodo = async () => {
    const newTodoData = await appWriteTablesDb.createRecords(import.meta.env.VITE_APPWRITE_DB_ID, import.meta.env.VITE_APPWRITE_TODOS_TABLES_ID, { text: todotext, description: "" })
    console.log(newTodoData)
  }

  const mutation = useMutation({
    mutationFn: createNewTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setTodotext("");
      toast.success('New Todo added, Success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    },
    onError: (error) => {
      console.error(error)
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  })

  const handleTodoSubmission = async (event) => {
    event.preventDefault();
    mutation.mutate();
  }


  return (
    <>
      <form onSubmit={handleTodoSubmission}>
        <input className="border border-amber-300 bg-red-50 text-black p-2" value={todotext} onChange={(event) => setTodotext(event.target.value)} type="text" />
        <button className="bg-red-600 text-white rounded-md p-3" type="submit">Add Todo</button>
      </form>
    </>
  )
}

export default TodoEditor