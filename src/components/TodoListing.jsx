import React, { useEffect, useState } from 'react'
import AppwriteTablesDB from '../appwrite-services/AppwriteTablesdb'

const TodoListing = () => {
    const appwriteTablesDb = new AppwriteTablesDB();

    const [todos, setTodos] = useState([]);

    const fetchAllTodos = async() => {
      try {
        const data = appwriteTablesDb.getAllRecords("6993cdf60033fb33283f", "6993ce1c003a3054b7da")
        console.log(data);
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {console.log("Re-rendered")})
  return (
    <div>
        {
        todos.map((todo,index) => (
          <article>
            
          </article>
        ))
        }
    </div>
  )
}

export default TodoListing