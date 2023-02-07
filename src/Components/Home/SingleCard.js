import React from 'react';
import { Button, Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCard = ({data}) => {
    const {title,img,details,process,variant,raised,goal}=data
    // console.log(data);
    return (
        <div className='mx-4'>
             <Card style={{ width: '20rem' }}>
      <Card.Img variant="top"  src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Card.Title className='h6'>Raised : {raised}$</Card.Title>
        <Card.Title className='h6'>Goal : {goal}$</Card.Title>
        <ProgressBar variant={variant} now={process} label={`${process}%`} animated={true} className='my-4'/>
        </Card.Body>
        <Link to={`/${title}`} className='text-center'><Button variant={variant} className='my-3 '>View Details</Button></Link>
        
        
       
    </Card>
        </div>
    );
};

export default SingleCard;