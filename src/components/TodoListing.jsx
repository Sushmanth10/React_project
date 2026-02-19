import { useEffect, useState } from 'react';
import AppwriteTablesDB from '../appwrite-services/AppwriteTablesdb';
import { useQuery } from '@tanstack/react-query';

const TodoListing = () => {
  const appwriteTablesDb = new AppwriteTablesDB();

  const fetchAllTodos = async () => {
    try {
      const data = await appwriteTablesDb.getAllRecords("6993cdf60033fb33283f", "6993ce1c003a3054b7da")
      console.log(data);
      return data
    } catch (error) {
      console.error(error);
    }
  }

  const { data: todos, isLoading, isPending: isTodoLoading, isFetching, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchAllTodos
  })

  if (isTodoLoading) {
    return <h1 className='text-5xl'>Todos are Loading...</h1>
  }

  return (
    <div className='flex flex-col items-center gap-3'>
      {
        todos.map((todo) => (
          <article key={todo?.$id} className="p-3 bg-red-200 rounded-md shadow-sm">
            <h1 className="font-semibold text-xl">{todo?.text}</h1>
            <p>{todo.description ? todo.description : "No Description"}</p>
          </article>
        ))
      }
    </div>
  )
}

export default TodoListing