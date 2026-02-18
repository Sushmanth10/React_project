import React from 'react'
import PrimaryButton from '../components/PrimaryButton.jsx';
import { Link, useNavigate } from 'react-router';
import AppwriteAccount from '../appwrite-services/AppWriteAccount.js';
import { Bounce, toast } from 'react-toastify';

const RegisterUserPage = () => {
    const [name, setName] = React.useState("");
    // const [fullname, setFullName] = React.useState("");
    const [username, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmpassword, setConfirmPassword] = React.useState("");
    const navigate = useNavigate();

    const appwriteAccount = new AppwriteAccount();
    const registerNewUser = async (event) => {
        try {
            event.preventDefault();

            if (password !== confirmpassword) {
                alert("Password do not match");
                return;
            }
            const newUserData = {
                name,
                email,
                password
            }

            const newUserResponse = await appwriteAccount.createNewUser(newUserData)
            console.log(newUserResponse);
            if (newUserResponse?.$id) {
                navigate("/login")
                toast.success('User registerd successfully!', {
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
        } catch (error) {
            console.error(error);
            console.log(error.message)
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
                backgroundImage: "url('https://thumbs.dreamstime.com/b/businessman-filling-online-registration-form-s-hand-laptop-147831246.jpg')"
            }}>
            <form className='bg-white/80 p-3 rounded-2x1 border-2 border-amber-100 flex flex-col gap-3' onSubmit={registerNewUser}>
                <input onChange={(event) => setName(event.target.value)} value={name} required placeholder='Enter your name' type="text" />
                {/* <input onChange={(event) => setUserName(event.target.value)} value={fullname} required placeHolder="Enter your Username" type="text" /> */}
                <input onChange={(event) => setEmail(event.target.value)} value={email} required placeholder="Enter your email" type="email" />
                <input onChange={(event) => setPassword(event.target.value)} value={password} required placeholder="Enter your password" type="password" />
                <input onChange={(event) => setConfirmPassword(event.target.value)} value={confirmpassword} required placeholder="Enter your password again" type="password" />

                <PrimaryButton type="submit">
                    Register
                </PrimaryButton>
                <p>
                    Already a user? <Link to="/login" className="text-blue-700 underline">Log In</Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterUserPage;