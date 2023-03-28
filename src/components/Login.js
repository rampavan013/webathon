import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { usersContext } from './Contextprovider';
import './Login.css';

function Login() {
    let {register,handleSubmit,formState:{errors}}=useForm();
    let [loginUser,setLoginUser] = useState([]);
    let [err,setErr] = useState("")
    let navigate=useNavigate();
    let [user,setUser] = useContext(usersContext);
    function submitForm(memberObj){
        
        axios.get('http://localhost:4000/members')
        .then((res)=>{
            
            
            let isEqual = res.data.find(obj=> (obj.memberID == memberObj.memberID && obj.password == memberObj.password))
            
            
            if(isEqual === undefined){
                setErr("s");
            }
            else{
                axios.get('http://localhost:4000/localUser')
                .then(res=>{
                    if(res.data.length == 0)
                    axios.post('http://localhost:4000/localUser',isEqual)
                    .then(res=>{console.log(res);navigate('/committee')})
                    .catch(err=>console.log(err))

                    else {
                        axios.put('http://localhost:4000/localUser/1',isEqual)
                        .then(res=>{console.log(res);navigate('/committee')})
                        .catch(err=>console.log(err))
                    }
                }
                )
                .catch(err=>console.log(err))
            }
        })
    }
    useEffect(()=>{setErr("")},[]);
  return (

        <div className='login1 border border-dark'>
          <h1 className='text-center mt-5 mb-3 w3 text-bold'>Glorious Event Planners and Designers!!</h1>
        <div className="container mt-5 d-flex align-items-center  ">
        <div className="row d-flex justify-content-around w-100 mt-5">
            <div className="col-md-9 col-lg-6 col-xl-5 text-center">
                <img src="https://i.etsystatic.com/9917841/r/il/83c4b0/906026129/il_570xN.906026129_2y2a.jpg"
                className="img-fluid rounded-2 w-75" alt="Sample image"/>
            </div>
            
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 d-flex ">
                <form onSubmit={handleSubmit(submitForm)} className=''>
                {err.length != 0 && <p className='text-danger'>*Invalid ID or Password</p>}
                <div className="form-outline mb-4 mt-4">
                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter Member ID" {...register('memberID',{required:true})} />
                    {errors.memberID?.type=='required' && <p className='text-danger'>*This field is required</p>}
                </div>

            
                <div className="form-outline mb-3">
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" {...register('password',{required:true})} />
                    {errors.password?.type=='required' && <p className='text-danger'>*This field is required</p>}
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <Button className="btn btn-primary" type='submit'
                    >Login</Button>
                </div>

                </form>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Login