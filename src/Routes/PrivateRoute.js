import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {users,loading,admin}=useContext(AuthContext)
    const location=useLocation()
    // console.log(loading);
    if(loading){
        return (<Spinner className='flex justify-content-center align-items-center' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>)
    }
    if(users && users.uid || admin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;