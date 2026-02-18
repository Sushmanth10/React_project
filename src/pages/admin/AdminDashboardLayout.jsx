import { Link, Outlet } from 'react-router'

const AdminDashboardLayout = () => {
  return (
    <div className="h-screen w-screen flex gap-6 bg-teal-50 p-6">
      <div className="bg-teal-200 rounded-2xl w-[20%] h-full p-6 flex flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <img className="object-contain h-12.5 rounded-md" src="love.png" alt="love.png" />
          <p className=" text-xl text-black font-semibold">Dashboard</p>
        </div>
        <nav className="flex flex-col items-start">
          <Link to="/admin-dashboard/courses" className="text-blue-700 underline hover:italic">Courses</Link>
          <Link to="/admin-dashboard/quizes" className="text-blue-700 underline hover:italic">Quizes</Link>
          <Link to="/admin-dashboard/transactions" className="text-blue-700 underline hover:italic">Transactions</Link>
        </nav>
      </div>

      <div className="w-[80%] h-full">
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminDashboardLayout