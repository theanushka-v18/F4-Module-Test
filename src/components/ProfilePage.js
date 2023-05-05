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
            {console.log(userInfo)}
            {userData && (
                <div id='profile-container'>
                    <img src={userData.image} />
                    <h2><span></span> {`${userData.firstName} ${userData.lastName}`} </h2>
                    <p><span>Id: </span> {`${userData.id}`}</p>
                    <p><span>Gender: </span> {`${userData.gender}`}</p>
                    <p><span>Username: </span> {`${userData.username}`}</p>
                    <p><span>Email: </span> {`${userData.email}`}</p>
                </div>
            )}
        </>
    )
}

export default ProfilePage;