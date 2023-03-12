import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useCheackAdmin from '../../Utitlites/useCheackAdmin';

const NavigationBar = () => {
  const {users,signOutUser,setUsers,admin,handleCustomSignOut}=useContext(AuthContext)
  const [showNav, setShowNav] = useState(false)
  const {isAdmin}=useCheackAdmin(users?.email)
 
  // console.log(admin)

  const handleSignOut=()=>{
    signOutUser()
    .then(res=>setUsers(''))
    .catch(err=>console.log(err))
  }
    return (
        <div>
             <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand  className='text-dark'>Navbar</Navbar.Brand>
          <Nav className="ml-auto">
           <Link to='/' className='p-2 h5 m-1 text-dark '>Home</Link>
         <Link to='/events' className='p-2 h5 m-1 text-dark '>Events</Link>
          <Link to='/donation' className='p-2 h5 m-1 text-dark '>Donation</Link>
         {isAdmin && <Link to='/users' className='p-2 h5 m-1 text-dark '>Users</Link>}
          <Link to='/registration'><Button variant="info" className='ms-auto m-1'>Registration</Button></Link>
          {/* <Link to='/users'><Button variant="info" className='ms-auto'>Users</Button></Link> */}
          <Link to='/admin'><Button variant="info" className='ms-auto m-1'>Admin Login</Button></Link>
          {/* <Link to='/adminSignUp'><Button variant="info" className='ms-auto'>Admin Login</Button></Link> */}
          {users?<Link to={`/profile/${users.email}`} className="h5">{users?.email}</Link>:''}
          {users?<Button variant="info" className='ms-auto' onClick={handleSignOut}>SignOut</Button>:''}
          {admin&&<h1 onClick={()=>setShowNav(!showNav)}>{admin?.userName}</h1>}


          {showNav && 
         
       <>
        
       <div className='height bg-warning' id="leftToRight">
        <ul>
          <li className='sidebar-option'>Home</li>
          <li className='sidebar-option pointer' onClick={handleCustomSignOut} >SignOut</li>
        </ul>
       </div>
       </>
     
          }
          </Nav>
        </Container>
      </Navbar>
     
        </div>
    );
};

export default NavigationBar;