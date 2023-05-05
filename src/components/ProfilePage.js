import React, { useEffect, useState } from 'react';
import "../App.css";

const ProfilePage = ({userData}) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch(`https://dummyjson.com/users/${userData.id}`);
            const data = await response.json();
            setUserInfo(data);
        }
        fetchUser();
    }, [userData.id]);


    return (
        <>
            <h1>Profile Page</h1>
            {userInfo && (
                <div id='profile-container'>
                    <img src={userInfo.image} />
                    <h2><span></span> {`${userInfo.firstName} ${userInfo.lastName}`} </h2>
                    <p><span>Id: </span> {`${userInfo.id}`}</p>
                    <p><span>Gender: </span> {`${userInfo.gender}`}</p>
                    <p><span>Username: </span> {`${userInfo.username}`}</p>
                    <p><span>Email: </span> {`${userInfo.email}`}</p>
                </div>
            )}
        </>
    )
}

export default ProfilePage;