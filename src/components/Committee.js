import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { usersContext } from './Contextprovider';

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
    <div>
      <hr/>
      
    <div className='container mt-5 d-flex justify-content-around mb-5'>
      <div className="col col-md-3 mt-2 h-50 ">
            <div className="card shadow">
                <div className="card-header rounded p-0">
                   
                </div>
                <div className="card-body">
                    <div className="fs-3">Planning Committee</div>
                     <p>
                     A planning committee is a group of individuals responsible for organizing and managing an event. The committee is usually formed by the event organizers or sponsors, 
                     and identifying vendors. 
                    
                    </p>


                </div>
            </div>
        </div>
        <div className="col col-md-3 mt-2 h-50 ms-4">
            <div className="card shadow">
                <div className="card-header rounded p-0">
                    
                </div>
                <div className="card-body">
                    <div className="fs-3">Decoration Comitte</div>
                     <p>
                        
                     </p>

                </div>
            </div>
        </div>
        <div className="col col-md-3 mt-2 h-50 ms-4">
            <div className="card shadow">
                <div className="card-header rounded p-0">
                  
                </div>
                <div className="card-body">
                    <div className="fs-3">Media/PR Comitte</div>
                     <p>
                        
                     </p>

                </div>
            </div>
        </div>
        </div>
    <div className='w-50 mx-auto vh-100'>
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