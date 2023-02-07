import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/UserContext';
import useFetch from '../../CustomHooks/useFetch';
import postData from '../../Utitlites/postData';
import Search from './Search';
import SingleEvents from './SingleEvents';

const Events = () => {
  const {users,admin}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(myState);
  const { data, loading, error,setData } = useFetch(
    'http://localhost:8000/totalEvents'
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const onSubmit = (obj) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    axios
      .post('http://localhost:8000/addEvents', obj, axiosConfig)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res);
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err);
      });
  };
const handleDelete=(id)=>{
  axios.delete(`http://localhost:8000/deleteEvent/${id}`)
  .then(response => {
   const remaining=data?.filter(item=>item._id!==id)
   setData(remaining)
  })
  .catch(error => {
    console.error(error);
  });
}
const handleSearch=async(search)=>{
const responce=await postData(`http://localhost:8000/locationEvent?location=${search.search}`)
// setData(responce)
}
  return (
    <div>
      <div className='w-50 m-auto mt-5'>

      <Search handleSearch={handleSearch}></Search>
      </div>
      <div className='d-flex'>
        {/* Total Events {data.length} */}
        <div className="row">
        {data?.map((item) => (
          <SingleEvents data={item} key={item._id} handleDelete={handleDelete}></SingleEvents>
        ))}
        </div>
      </div>
      {users && <Button variant='primary' onClick={handleShow}>
        Upload More
      </Button>}
      {admin && <Button variant='primary' onClick={handleShow}>
        Upload More
      </Button>}
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action='' onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              className='form-control my-1'
              placeholder='Event Name'
              {...register('eventName')}
            />
            <input
              type='text'
              className='form-control my-1'
              placeholder='Event Location'
              {...register('location')}
            />
            <input
              type='text'
              className='form-control my-1 details'
              placeholder='Event Details'
              {...register('details')}
            />
            <input
              type='text'
              className='form-control my-1 '
              placeholder='Event Picture'
              {...register('picture')}
            />
            <input
              type='text'
              className='form-control my-1'
              placeholder='Budget'
              {...register('budget')}
            />
            <input
              type='date'
              name=''
              className='form-control my-1'
              id=''
              {...register('date')}
            />
            <button type='submit' className='my-1 text-center btn btn-primary'>
              Post
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Events;
