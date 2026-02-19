import { useNavigate } from 'react-router';
import AppwriteAccount from '../appwrite-services/AppWriteAccount'
import useUserStore from '../stores/useUserStore'

const ProfilePage = () => {
  const currentUser = useUserStore((state) => state.user)
  const appwriteAccount = new AppwriteAccount();
  const navigate = useNavigate();

  const handlelogout = async() => {
    try {
      const result = await appwriteAccount.logOutCurrentUser();
      console.log(result);
      if(!result?.message){
        navigate("/login")
      }
    } catch (error) {
      console.error(error)
    } finally {

    }
  }
  return (
    <div>
      <form>

        <div>          
        <p >{currentUser ? currentUser.name: 'Loading...'} </p>     {/* conditional rendering, terminary operator*/}
        <p >{currentUser ? currentUser.email: 'Loading...'} </p>    {/*terminary operator*/}
        </div>
        

        </form>
      <button className="text-red-600 underline" onClick={handlelogout}>LogOut</button>

    </div>
  )
}

export default ProfilePage