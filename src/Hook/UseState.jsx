import {useState} from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const UseState = () => {

    const [value, setValue] = useState(1);
    const getFullName = (firstName, lastName) => {
        console.log("getFullName function has been invoked");
        return `${firstName} ${lastName}`;
    }

    const [username, setUsername] = useState(() => getFullName("Sundeeep", "Dasari"))
    console.log("username: ", username);

    function attachLastName(lastName){
        setUsername(`${username} ${lastName}`);
    }

    return (
        <div>
            <h1>useState Class</h1>
            <hr />
            <h2>{username}</h2>
            <PrimaryButton name="Sundeep" onClick={() => attachLastName("Dasari")}>
                Attach Lastname
            </PrimaryButton>

            <PrimaryButton name="Sundeep" onClick={() => attachLastName("Dasari")}>
                Hello
            </PrimaryButton>
        </div>
    )
}

export default UseState