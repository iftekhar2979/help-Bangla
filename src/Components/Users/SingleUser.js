import React from 'react';

const SingleUser = ({data,index,handleUpdate}) => {
    return (
      <>
      <tr>
          <td>{index+1}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td onClick={()=>handleUpdate(data._id)}><span className='bg-warning p-1'>{data.status?'Approved':"Pending"}</span></td>
        </tr>
      </>
    );
};

export default SingleUser;