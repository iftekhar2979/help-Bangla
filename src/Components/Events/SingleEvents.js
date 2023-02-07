import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../Context/UserContext';
const SingleEvents = ({data,handleDelete}) => {
  const {users,admin}=useContext(AuthContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // console.log(data)
    const {budget,details,picture,eventName,location,date,_id}=data
    return (
        <>
        <div className="card col-md-3 m-4" style={{width:'22rem'}}>
  <img className="card-img-top" src={picture} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{eventName}</h5>
    <p className="card-text"> {details}</p>
  
    <p className="card-text">Location : {location}</p>
    <p className="card-text">Date : {date}</p>
    <p className="card-text">Total Budget : {budget}</p>
    {admin && <Button variant="primary" onClick={handleShow}>
    X</Button>}
    
    
    <a  className="btn btn-primary ms-2">Open Full Event</a>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Want to Delete {eventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleDelete(_id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
</div>
</>
    );
};

export default SingleEvents;