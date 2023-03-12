import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import useFetch from '../../CustomHooks/useFetch';
import SingleUser from './SingleUser';
const Users = () => {
    const {data,loading,error}=useFetch()
    const [userData,setUserData]=useState()
    
    const url='http://localhost:8000/totalUsers'
    useEffect(()=>{
        let axiosConfig = {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          };
          axios
            .get(url, {}, axiosConfig)
            .then((res) => {
              setUserData(res.data)
            })
            .catch((err) => {
              console.log('AXIOS ERROR: ', err);
            });
       

         },[url] )
    if(loading){
        return <h2>Loading...</h2>
    }
    const handleUpdate=(ids)=>{
      axios.patch('https://help-bangla-server.vercel.app/userUpdate',{id:ids,status:'Approved'})
      .then(res=>{
        // console.log(res)
        if (res.modifiedCount > 0) {
          const remaining = userData.filter(odr => odr._id !== ids);
          const approving = userData.find(odr => odr._id === ids);
          approving.status = 'Approved'

          const newOrders = [approving, ...remaining];
          setUserData(newOrders);
      }
      })
      .then(err=>console.log(err))
    }
    return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Number</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Update</th>
          {/* <th>Username</th> */}
        </tr>
      </thead>
      <tbody>
        {userData?.map((item,index)=><SingleUser key={item._id} data={item} index={index} handleUpdate={handleUpdate}></SingleUser>)}
      </tbody>
    </Table>
    </div>
    );
};

export default Users;