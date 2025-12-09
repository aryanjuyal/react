import React ,{useState,useContext}from 'react'
import UserContext from '../context/Usercontext'

function Login(){
    
    const[pass,setpass]=useState('')
    
    const[username,setusername]=useState(null)
const {setUser}=useContext(UserContext)
 //this setuser was defined in usercontext file
// we get the access of setuser from usercontext we 
//need to give the context in the usecontext

 const handleSubmit=(e)=>{
    e.preventDefault()// we did this cz by default value wents somewhere through url so we prevent it
    setUser({username,pass})

        
    }
    return (
        <div>
            <h2>Login:</h2>
          
            <input type="text"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
             placeholder='username' />
                        <input type="text"
                        value={pass}
                        onChange={(e)=>setpass(e.target.value)} 
                        placeholder='password' />
                        <button onClick={handleSubmit}>Submit</button>
        </div>
    )

}
export default Login;