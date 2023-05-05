import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import "../App.css";    

const LoginPage = (props) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [IsErr, setIsErr] = useState(false);
    const [info, setInfo] = useState(null);

    function sendDataToApp(data) {
        props.parentCallback(data);
    }

    async function handleLogin(e) {
        e.preventDefault();
        if(username && password) {
            try {
                const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            });
            const data = await response.json();
            if(response.status === 200) {
                setInfo(data);
                sendDataToApp(data);
                navigate('/profile');
            } else if(response.status === 400) {
                setErr("Invalid username or password");
                setIsErr(true);
            }
        } catch(err) {
                setErr(err);
                setIsErr(true);
            }
        }
    }

    return (
        <>
            <div id='main'>
                <h1>Login Page</h1>
                    <input type='text' placeholder='Enter Username' value={username} onChange={(e) => {setUsername(e.target.value)}} />
                    <input type='password' placeholder='Enter Password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    <button type='submit' onClick={handleLogin}>Login</button>
            </div>
            {
                ((!IsErr && info) ? <ProfilePage info={info} /> : <p style={{color : "red"}}>{err}</p>)
            }
        </>
    )
}

export default LoginPage;
