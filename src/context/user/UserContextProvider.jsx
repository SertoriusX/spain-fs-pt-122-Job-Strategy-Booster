import React, { useState } from 'react'
import { UserContext } from './UserContext'
export default function UserContextProvider({children}) {
    const[token,setToken]=useState(()=>localStorage.getItem("token"))
    const saveToken=(newToken)=>{
        localStorage.setItem("token",newToken)
        setToken(newToken)
    }
    const logingOut=()=>{
        localStorage.removeItem("token")
        setToken(null)
    }
  return (
    <UserContext.Provider value={{token,saveToken,logingOut}}>
        {children}
    </UserContext.Provider>
  )
}
