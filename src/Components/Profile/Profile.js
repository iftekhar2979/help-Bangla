import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Profile = () => {
    const {users}=useContext(AuthContext)
    console.log(users);
    return (
        <div>
            <h1>WellCome {users?.email}</h1>
        </div>
    );
};

export default Profile;