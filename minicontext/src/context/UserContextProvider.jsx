import React from "react"
import {useState}from 'react'
import UserContext from'./Usercontext'
const UserContexProvider= ({children})=>{ //user context provider is a method here 
//here we directly passed the chldren because we pass the as it is props that we get

const [user,setUser]=useState(null)
return(
    <UserContext.Provider  value={{user,setUser}}> 
    {children}
    </UserContext.Provider> //this wrapping we didi is the providing that the usercontext gives
    //since we didnt ave any data and usercontextprovider doesnt knows what to access that is why we
    //we gave data by value to tell provider whose access we are giving him
) 
}
export default UserContexProvider;