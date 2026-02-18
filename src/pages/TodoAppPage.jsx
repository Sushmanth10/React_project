import TodoEditor from '../components/TodoEditor'
import TodoListing from '../components/TodoListing'

const TodoAppPage = () => {
  return (
    <div className="flex items-center justify-center">
    <TodoEditor />
    <TodoListing />
    </div>
  )
}

export default TodoAppPage