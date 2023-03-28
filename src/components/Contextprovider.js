import React, { useState } from 'react'
import { createContext } from 'react'

export let usersContext=createContext();

function Contextprovider({children}) {
    let [user,setUser]=useState("");
    console.log(user)
  return (
    <usersContext.Provider value={[user,setUser]}>
        {children}
    </usersContext.Provider>
  )
}

export default Contextprovider