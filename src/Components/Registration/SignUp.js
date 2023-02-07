import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Context/UserContext';
const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error,setError]=useState( )
    const {createNewUser,setUsers}=useContext(AuthContext)
    // console.log(errors);
    const onSubmit=(obj)=>{
        const {name,email,password,confirmPassword,termCondition}=obj

       if(password!==confirmPassword ){
        setError('password not matched')
        
        return
       }
       else if(!termCondition){
        return 
       }else{
        setError('')
        createNewUser(email,password)
        .then(result=>{
          const user=result.user
         setUsers(user)
        })
        
       }
      
       
      
    }
    return (
        <section class="vh-100" style={{backgroundColor: '#eee'}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: '25px'}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form class="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" {...register('name',{ required: true, maxLength: 30 } )} aria-invalid={errors.name ? "true" : "false"} placeholder='Your Name' />
                       {errors.name?.type === 'required' && <p className="text-danger">Name is required</p>}
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class='form-control'  {...register('email',{required:true})} aria-invalid={errors.email?'true':'false'} placeholder='Your Email' />
                      {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control"{...register('password',{required:true})} aria-invalid={errors.password?'true':'false'} placeholder='Your Password' /> 
                      {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" placeholder='confirm password' {...register('confirmPassword')}/>
                     {error && <p>{error}</p>}
                    </div>
                  </div>
                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" {...register('termCondition')} value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>
                  <div>Already have account <Link to='/login'>login</Link></div>
                </form>
              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://thumbs.dreamstime.com/z/contact-us-customer-support-hotline-people-connect-call-customer-support-contact-us-customer-support-hotline-people-connect-call-129786983.jpg"
                  class="img-fluid" alt="Sample image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default SignUp;