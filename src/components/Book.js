import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom'
import './Book.css';

function Book() {
  let {register,handleSubmit,formState:{errors}}=useForm();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function submitForm(event){

    event.phoneNumber = +(event.phoneNumber);
    event.capacity = +(event.capacity);

    axios.post('http://localhost:4000/events',event)
    .then(res=>setShow(true))
    .catch(err=>console.log(err))
  }
  return (

    <div className='container form1 rounded mt-4  bg-opacity-75  p-3'>
      <h1 className='text-center mb-4'>
        Booking Details
      </h1>
      <div className='container'>
        <form onSubmit={handleSubmit(submitForm)} className='d-flex flex-column w-25 mx-auto'>
          
          <input
          type="text"
          className='form control mb-3 rounded p-2'
          placeholder="Enter your Name"
          {...register('username',{required:true})}
          />
          {errors.username?.type=="required" && <p className='text-danger'>Username is required</p>}
          
          <input
          type="text" 
          className='form control mb-3 rounded p-2'
          placeholder="Mobile Number"
          {...register("phoneNumber",{required:true,minLength:10,maxLength:10})}
          />
          {errors.phoneNumber?.type=="required" && <p className='text-danger'>*Mobile Number Required</p>}
          {errors.phoneNumber?.type=="minLength" && <p className='text-danger'>*Invalid Phone Number</p>}
          {errors.phoneNumber?.type=="maxLength" && <p className='text-danger'>*Invalid Phone Number</p>}
        <div className='select1'>
          <select  {...register("Event")} className='form-select mb-3' defaultValue={"DEFAULT"} w-5>
            <option value="DEFAULT" disabled  >
              Select type of Event
            </option>
            <option value="Wedding Anniversary">
            Wedding Anniversary
            </option>
            <option value="Birthday Celebration">
             Birthday Celebration
            </option>
            <option value="Concert">
              Concerts
            </option>
            <option value="Destination">
              Destination
            </option>
            <option value="CineAwards">
              Cine Awards
            </option>
            
            
          </select>

          </div>
            <div className='date1 border border-dark rounded'>
              <input type="date" id="form3Example4" className="form-control"
                    placeholder="Choose Date" {...register('date',{required:true})} />
            </div>
            {errors.date?.type=='required' && <p className='text-danger'>*Enter Date</p>}
           <div className='mt-3 '>
             <textarea   
          className='form control mb-3 rounded p-2'
          placeholder="Enter your Address"
          {...register("address",{required:true})}
          ></textarea>
          {errors.username?.type==="required" && <p className='text-danger'>*Address is required</p>}
          </div>

          <div className='mt-2  '>
             <input
          type="number" 
          className='form control mb-3 rounded p-2'
          placeholder="Capacity"
          {...register("capacity",{required:true,max:1000})}
          />
          {errors.capacity?.type==="required"  && <p className='text-danger'>*Capacity is required</p>}
          {errors.capacity?.type==="max"  && <p className='text-danger'>*Capacity overloaded</p>}
          </div>
          <div className="text-center text-lg-start mt-2 ">
              <Button className="btn btn-success" type='submit'>Submit</Button>
          </div> 

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Slot Requested</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woooh!!👍.Further details are updated by conformation Call</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>

        
        </form>

      </div>

    </div>
  )
}

export default Book