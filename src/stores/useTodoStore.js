import { create } from "zustand";
 
const useTodoStore = create((set) => ({
    todos: [],
    username:"",
    createTodo: (newTodo) => (set((state) => ({todos: [...state.todos, newTodo]})))
}))

export default useTodoStore;