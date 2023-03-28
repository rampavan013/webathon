import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { usersContext } from './Contextprovider';
import './Committee.css';

function Committee() {

  let [msg,setMsg]=useState([]);
  let {register,handleSubmit,setValue,formState:{errors}}=useForm();
  let [user] = useContext(usersContext);

  let [loginUser,setLoginUser] = useState("")
  

  function resett(){
    axios.get('http://localhost:4000/messages')
    .then(res=>setMsg(res.data))
    .catch(err=>console.log(err))

    axios.get('http://localhost:4000/localUser')
    .then(res=>{setLoginUser(res.data[0].name)})
    .catch(err=>console.log(err))

  }
  
  let ans = ""
  
  function submitMessage(newMessage){

    console.log(loginUser)
    newMessage.name = loginUser

    console.log(newMessage)
    
    axios.post('http://localhost:4000/messages',newMessage)
    .then(res=>resett)
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    axios.get('http://localhost:4000/messages')
    .then(res=>setMsg(res.data))
    .catch(err=>console.log(err))

    axios.get('http://localhost:4000/localUser')
    .then(res=>{setLoginUser(res.data[0].name)})
    .catch(err=>console.log(err))

  },[])
  return (
    <div className='pb-5'>
      <hr/>
      
      <div className='container mt-5 border d-flex justify-content-around mb-5'>
      <div className="col col-md-3 mt-2 h-50 bg-dark">
            <div className="card shadow">
                <div className="card-header rounded p-0">
                   
                </div>
                <div className="card-body bg-success bg-opacity-50">
                    <div className="fs-3 w4">Planning Committee</div>
                     <p>
                     A planning committee is a group of individuals responsible for organizing and managing an event. The committee is formed by the event organizers.
                     <br/>
                     <br/>
                     
                     <h5>Contact Details :</h5>📞 9219199129<br/> 📞 9245367121<br/>
                     ✉ ravi2041@gmail.com
                     
                     </p>
                     

                </div>
            </div>
        </div>
        <div className="col col-md-3 mt-2 h-50 ms-4 bg-dark">
            <div className="card shadow">
                <div className="card-header rounded p-0">
                    
                </div>
                <div className="card-body  bg-success bg-opacity-50 ">
                    <div className="fs-3 w4">Decoration Committee</div>
                     <p>
                     The visual and aesthetic components of an event are designed and carried out by the Decorating Committee and designing team.<br/><br/>
                     <h5>Contact Details :</h5>📞 9219199134<br/> 📞 9245367156<br/>
                     ✉ shiva_kushi20@gmail.com
                     </p>
                   
                </div>
            </div>
        </div>
        <div className="col col-md-3 mt-2 h-50 ms-4 bg-dark">
            <div className="card shadow">
                <div className="card-header rounded p-0">
                  
                </div>
                <div className="card-body  bg-success bg-opacity-50">
                    <div className="fs-3 w4">Media/PR Committee</div>
                     <p>
                     In order to guarantee that an event receives sufficient media coverage and  the Media and PR Committee is in charge of managing the public image.<br/><br/>
                     <h5>Contact Details: </h5>📞 9219199125<br/> 📞 9245367132<br/>
                     ✉ manoj_kumar@gmail.com
                     </p>
                    
                     
                </div>
            </div>
        </div>
        
 
      </div>
    <div className='w-50 mx-auto'>
      <h2 className='display-4 text-center mb-3'>Messages</h2>
    <div className="overflow-auto bg-dark text-white p-2 rounded" style={{ height: '200px' }}>
    {
        msg.map(obj => 
          <div className='row row-cols-2'>
            <div className='col-2'>
              {obj.name}
            </div>
  
            <div className='col-8'>
              {obj.message}
            </div>
            <hr className='w-100'/>
          </div>
        )
      }
    </div>
    <form className='d-flex mt-2' onSubmit={handleSubmit(submitMessage)}>
    <input type='text' value={loginUser} disabled className='w-25 rounded' />
    <textarea className='w-75 rounded pt-1' placeholder=' Type a message...' rows={1}  
    {...register("message",{required:true})}
    >
    </textarea>
    <Button className='ms-2 mt-0' type='submit'>Send</Button>
    </form>
    </div>
    </div>
  )
}

export default Committee