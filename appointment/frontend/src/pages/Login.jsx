import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name,setName] = useState('')

  const submitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='flex items-center mt-20'> 
      <div className='flex flex-col m-auto items-start gap-3 p-8 min-w-[340px] sm:min-w-96 border rounded-xl shadow-lg'>
        <p className='text-2xl font-semibold'>{state==='Sign up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign up' ? "sign up" : "log in"} to book appointment</p>
        <div className='w-full'>
          <p>Full name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="text" onChange={(e)=>setName(e.target.value)} value={name} required />
        </div>
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-2' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md '>{state==='Sign up' ? "Create Account" : "Login"}</button>
        {
          state==="Sign up" ? <p>Already have account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p> : <p>Create new account? <span onClick={()=>setState('Sign up')} className='text-primary underline cursor-pointer'>Click here</span></p>
        }      
      </div>
    </form>
  )
}

export default Login