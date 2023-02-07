import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import jwtProvider from '../../Utitlites/jwtProviderWithPost';
const LogIn = () => {
  const {register,handleSubmit,watch,formState:{errors}}=useForm()
  const {signIn,setUsers,setAdmin,signInWithGoogle,signInWithGitHub}=useContext(AuthContext)
  const [loginErrors,setLoginErrors]=useState({
    email:false,
    password:false
  })
const navigate=useNavigate()
const location=useLocation()
const from=location.state?.from?.pathName || '/'
// console.log(location);
  const onSubmit=(obj)=>{
    const {email,password}=obj
    
    signIn(email,password)
    .then(result=>{
      const user=result.user
      setUsers(user)
      setLoginErrors({email:false,password:false})
      
      axios.post('http://localhost:8000/jwt', {email:user.email})
      .then(res => {
        if(res.data){
          console.log(res.data)
          localStorage.setItem("token",res.data.token)
        }
        navigate(from,{replace:true})
      })
      .catch(err => console.error(err));
  
      
    }).catch(err=>{
      if(err.code==='auth/wrong-password'){
        setLoginErrors({email:false,password:true})

      }
      if(err.code==='auth/user-not-found'){
        setLoginErrors({email:true,password:false})
      }
      
      })
  }
  const handleGoogle= ()=>{
    signInWithGoogle()
    .then(async(result)=>{
      const user=result.user
      // console.log(user)
       await jwtProvider(user)
      
    }).catch(err=>console.log(err))
  }
  const handleGithub=()=>{
    signInWithGitHub()
    .then(async(result)=>{
      const user=result.user
      console.log(user)
      await jwtProvider(user)
    }).catch(err=>console.log(err) )
  }
    return (
        <section className="vh-100 bg-muted" >
          
            <h2 className='text-center my-2'>Login Heree</h2>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://thumbs.dreamstime.com/z/contact-us-icon-colorful-puzzle-179945172.jpg"
                className="img-fluid" alt="Phone image"/>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit(onSubmit)} htmlFor=''>
                <div className="form-outline mb-4">
                  <input type="email" id="form1Example13" className="form-control form-control-lg" {...register('email',{required:true})}/>
                  <label className="form-label" htmlFor="form1Example13" >Email address</label>
                </div>
      
                
                <div className="form-outline mb-4">
                  <input type="password" id="form1Example23" className="form-control form-control-lg" {...register('password',{required:true})} />
                  <label className="form-label" htmlFor="form1Example23">Password</label>
                </div>
      
                <div className="d-flex justify-content-around align-items-center mb-4">
                  
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" defaultChecked />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  </div>
                  <p>Forgot password?</p>
                </div>
                {loginErrors.password?<p className='text-danger'>please use Valid Password to Login</p>:''}
                {loginErrors.email?<p className='text-danger'>please use Valid Email to Login</p>:''}
      
                
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
      
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
      
                <p className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998"}} 
                  role="button" onClick={handleGoogle}>
                  <i className="fab fa-google-f me-2"></i>Continue with Google
                </p>
                <p className="btn btn-primary btn-lg btn-block my-3" style={{backgroundColor: "#55acee"}} 
                  role="button" onClick={handleGithub}>
                  <i className="fab fa-twitter me-2"></i>Continue with Github</p>
                  
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default LogIn;