import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import "./index.css"
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import ProfilePage from './pages/ProfilePage.jsx';
import RegisterUserPage from './pages/RegisterUserPage.jsx';
import LogInPage from './pages/LoginPage.jsx';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage.jsx';
import TodoAppPage from './pages/TodoAppPage.jsx';
import OverviewPage from './pages/admin/OverviewPage.jsx';
import AdminDashboardLayout from './pages/admin/AdminDashboardLayout.jsx';
import AdminCoursesPages from './pages/admin/AdminCoursesPages.jsx';
import AdminQuizesPages from './pages/admin/AdminQuizesPages.jsx';
import AdminTransactionsPages from './pages/admin/AdminTransactionsPages.jsx';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './utils/queryClient.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CounterPage from './pages/CounterPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "profile",
                element: <ProfilePage />
            },
            {
                path: "todo",
                element: <TodoAppPage />
            },
            {
                path: "counter",
                element: <CounterPage />
            }
        ]
    },
    {
        path: "/admin-dashboard",
        element: <AdminDashboardLayout />,
        children: [
            {
                index: true,
                element: <OverviewPage />
            },
            {
                path: "courses",
                element: <AdminCoursesPages />
            },
            {
                path: "quizes",
                element: <AdminQuizesPages />
            },
            {
                path: "transactions",
                element: <AdminTransactionsPages />
            },

        ]
    },
    {
        path: "/register",
        element: <RegisterUserPage />
    },
    {
        path: "/login",
        element: <LogInPage />
    }

])


const rootDiv = document.getElementById("root");
createRoot(rootDiv).render(
    <>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
            <ToastContainer />
        </QueryClientProvider>
    </>
)