import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import useCheackAdmin from '../Utitlites/useCheackAdmin';

const PrivateRoute = ({children}) => {
    const {users,loading}=useContext(AuthContext)
 
    const {isAdmin}=useCheackAdmin(users?.email)
    // console.log(isAdmin)

    const location=useLocation()
    // console.log(loading);
    if(loading ){
        return (<Spinner className='flex justify-content-center align-items-center' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>)
    }
    console.log(isAdmin?.isAdmin)
    if(users && isAdmin?.isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;