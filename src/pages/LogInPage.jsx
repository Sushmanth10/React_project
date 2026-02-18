import { useState } from "react";
import { Link, useNavigate } from "react-router";
import PrimaryButton from "../components/PrimaryButton";
import AppwriteAccount from "../appwrite-services/AppWriteAccount";
import { Bounce, toast } from "react-toastify";



const LogInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const appwriteAccount = new AppwriteAccount()
    const logInUser = async (event) => {
        try {            
            event.preventDefault();
            const logInData = {
                email,
                password
            }

            const logInResponse = await appwriteAccount.logInWithEmailAndPassword(logInData)
            console.log(logInResponse);

            navigate("/")
            toast.success('User login success!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        } catch (error) {
            console.error(error);
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        finally {
            console.log("finally")
        }
    }

    return (
        <div className='h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center'
            style={{
                backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20230531/pngtree-corporate-business-office-workplace-background-image-image_2856638.jpg')"
            }}>
            <form className='bg-white/80 p-3 rounded-2x1 flex flex-col gap-3' onSubmit={logInUser}>
                <input onChange={(event) => setEmail(event.target.value)} value={email} required placeholder="Enter Your email..." type="email" />
                <input onChange={(event) => setPassword(event.target.value)} value={password} required placeholder="Enter your password" type="password" />

                <PrimaryButton type="submit">
                    Login
                </PrimaryButton>
                <p>
                    Create New Account!   <Link to="/register" className="text-blue-700 underline"> Register</Link>
                </p>
            </form>
        </div>
    )
}

export default LogInPage