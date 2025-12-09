import { useState, useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setlength]=useState(8)
  const[numberallowed,setnumberallowed]=useState(false)
  const[characterallowed,setcharacterallowed]= useState(false)
  const[password,setpassword]=useState("")

const passwordRef=useRef(null)

  const passwordgenerator= useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberallowed) str+="0123456789"
if(characterallowed) str+="!@#$%^&*(){}"
for(let i=0;i<=length;i++){
let char= Math.floor(Math.random()* str.length +1)
pass+=str.charAt(char)

}
setpassword(pass)

  },[length,numberallowed,characterallowed,setpassword])

const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()  
    passwordRef.current?.setSelectionRange(0,3)  //?.optional select
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordgenerator()
},[length,numberallowed,characterallowed,passwordgenerator])
  return (
    <>
      <div>
       <h1 className="text-4xl text-center text-white my-5">Password generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 text-black-500 bg-gray-700 '>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input 
          type="text"
          value={password}
          className='outline-none w-80 py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          
         <button
         onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white '>copy</button>
         
        </div>

        <div className='flex test-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Length:{length}</label>

          </div>
          <div className='flex items-center gap -x-1'>
            <input
            type="checkbox"
            defaultChecked={numberallowed}
            id="numberInput"
            onChange={()=>{
              setnumberallowed((prev)=> !prev);
            }}
            />
            <label htmlFor='=numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap -x-1'>
            <input
            type="checkbox"
            id="characterInput"
            defaultChecked={characterallowed}
            onChange={()=>{
              setcharacterallowed((prev)=>!prev);
            }}
            />
            <label htmlFor='characterInput'>char</label>
          </div>
        </div>

      </div>
      </div>
      
     
    </>
  )
}

export default App
