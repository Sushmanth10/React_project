import { useEffect } from 'react'
import AppwriteAccount from './appwrite-services/AppWriteAccount.js'
import useUserStore from './stores/useUserStore.js';
import { Outlet, useNavigate } from 'react-router';
import AppHeader from './components/AppHeader.jsx';


function App() {

    const appwriteAccount = new AppwriteAccount();
    const setUser = useUserStore((state) => state.setUser)
    console.log("/Page App components rendered!") 

    const navigate = useNavigate();

    const getCurrentUser = async () => {
        try {
            const currentUser = await appwriteAccount.getCurrentUser();
            console.log(currentUser);
            setUser(currentUser);
        } catch (error) {
            console.error(error);
            navigate("/login");
        }
    }

    // useEffect(() => {
    //     getCurrentUser()
    // }, []);
    useEffect(() => {
        const checkUser = async () => {
            try {
                const user = await appwriteAccount.getCurrentUser();
                setUser(user);
            } catch (error) {
                console.log('No active session');
            }
        };
        checkUser();
    }, []);

    return (
        <div>
            <AppHeader />

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default App;