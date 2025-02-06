import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {  signupUser } from '../services/auth.services.js';
import Login from './Login.jsx';
import Swal from 'sweetalert2';
import { FaRegUser } from "react-icons/fa";


const schema = yup
  .object()
  .shape({
    name: yup.string().min(3).max(20),
    email: yup.string().required().email().min(8).max(25),
    password: yup.string().required().min(6).max(12),
   
  })

function SignIn() {
  const [value, setValue] = useState('signup')
  


  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(schema),
  });

async function signup(data) {
  try {
    let res =  await signupUser(data)
    console.log(res);
    Swal.fire(res.message, "Please login for authrizations ! ", "success");
    setValue('login')

  } catch (error) {
    Swal.fire('Duplicate key ! ', error.message, "error");
    
  }

  
}




  return (
    <>
    <div className="container-fluid ">
      <div className="text-center py-3 ">
        <button onClick={()=> setValue('signup') } className={ value == 'signup' ? `btn btn-outline-success shadow-lg me-3`:`btn btn-outline-warning me-3`}>Signup</button>
        <button onClick={()=> setValue('login')} className={ value == 'login' ? `btn btn-outline-success shadow-lg me-3`:`btn btn-outline-warning me-3`}>Login</button>
        </div>
        {value == 'signup' && 
    <div className="row mb-5">
      <div className="col-sm-8 col-md-6 col-lg-4 bg-light rounded-3 mx-auto shadow p-4 mt-4 ">
        <div className='text-center text-info' style={{fontSize:"50px"}}>
        <FaRegUser className=''/>
          </div>
        <h4 className='text-center text-success '>Signup now ! </h4>
        <form onSubmit={handleSubmit((d) => signup(d))} >
          <input {...register("name")} className='form-control mt-3 ' type="text" placeholder='Name' />
          {errors.name && <p className='text-danger'>{errors.name.message}</p>}
          <input {...register("email")} className='form-control mt-3 ' type="email" placeholder='Email' />
          {errors.email && <p className='text-danger'>{errors.email.message}</p>}
          <input {...register("password")} className='form-control mt-3 ' type="password" placeholder='password' />
          {errors.password && <p className='text-danger'>{errors.password.message}</p>}
          <button className='btn btn-success mt-4' >Signup</button>
          <br />
          <br />
          <p>Already have an account ? <span className='text-info' style={{cursor:"pointer"}} onClick={()=> setValue('login')} >login</span></p>

        </form>

        
      </div>
    </div> }

    {value == 'login' && 
    <Login setValue={setValue}/>
    }
   
    </div>
    </>
  )
}

export default SignIn