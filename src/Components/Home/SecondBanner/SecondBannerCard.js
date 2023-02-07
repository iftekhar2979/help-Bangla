import React, { useState } from 'react';
import { Button, Card, Form, ProgressBar } from 'react-bootstrap';

const SecondBannerCard = () => {
    const [amount,setamout]=useState()
    const donate=[100,200,300,400]
   
  return (
    <Card style={{ width: '25rem', height: 'auto', margin: '1rem' }} className='relative'>
      <Card.Body className='text-dark'>
        <Card.Title className='h1 text-center'>SUPPORT US</Card.Title>
        <Card.Subtitle className='mb-2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          quibusdam, corporis dolore saepe nostrum tempore?
        </Card.Subtitle>
        {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's conte
            nt.
          </Card.Text> */}
        <Card.Body>
          <div className='d-flex images'>
            <img
              src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png'
              alt=''
              style={{ height: '4rem', margin: '1rem', width: '4rem' }}
              className='forHover'
            />
            <img
              src='https://cdn-icons-png.flaticon.com/512/196/196566.png'
              alt=''
              style={{ height: '4rem', margin: '1rem', width: '4rem' }}
              className='forHover'
            />
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png?20210114172858'
              alt=''
              style={{ height: '4rem', margin: '1rem', width: '4rem' }}
              className='forHover'
            />
          </div>
          <p className='text-center'>Raised 4100 out of 8500</p>
          <ProgressBar
            variant='warning'
            now={60}
            label={'60%'}
            style={{ height: '1rem' }}
          />
          <Form className='my-2'>
            <Form.Group className='mb-3' controlId='formBasicPayment'>
              <Form.Label className='h4 bold text-center'>Donatation</Form.Label>
              <Form.Control type='number' placeholder='100' value={amount} />
             {
                donate?.map((item,index)=><Button className='btn btn-info m-1 mt-2' key={index} onClick={()=>setamout(item)}>$ {item}</Button>)
             }
             <div className='text-center mt-3'>
             <button type="submit" className='btn btn-warning'>Donate Now</button>

             </div>
            </Form.Group>
          </Form>
        
        </Card.Body>
        
      </Card.Body>
    </Card>
  );
};
export default SecondBannerCard;
