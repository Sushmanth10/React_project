# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






TodoEditor.jsx: it takes responsible for creating new todos
Provides an input form where users can type a new todo
Uses [useTodoStore[](src/stores/useTodoStore.js) to access the ](http://_vscodecontentref_/4)createTodo action
When submitted, it calls createTodo(todotext) to add the todo to the global state
Clears the input field after submission
Handles write operations (CREATE)

TodoListing.jsx: it takes responsible for displaying all todos
Fetches todos from Appwrite using AppwriteTablesDB
Uses @tanstack/react-query for data fetching and caching
Maps through the todos array and displays each todo as a card
Shows loading state while fetching data
Handles read operations (READ)

Why Separate Them?
Single Responsibility - Each component has one job:
Editor = Handle input/creation
Listing = Handle display/fetching
Reusability - Each can be used independently in different pages
Maintainability - Easier to debug and update specific functionality
Clean Architecture - Follows React best practices by separating form logic from data