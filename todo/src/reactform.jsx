import React, { useState } from 'react'
import axios from 'axios'

export const reactform = () => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [users, setUsers]=useState([])

    const handleSubmit=async(e)=>{
        e.preventDefault()
    try{
        console.log(username, password);
    // const respond=await axios.post('http://127.0.0.1:8000/',{username,password})
    const response = await axios.post('http://127.0.0.1:8000/', {
                username,
                password
            });
    alert('form submitted')
    setUsers(response.data)
    console.log(response.data)
    }
    catch(err){
        alert('invalid input')
    }
    }
  return (
        <>
        <form onSubmit={handleSubmit} >
        <label>name</label>
        <input type='text' className='border border-black' onChange={(e)=>setUsername(e.target.value)}/>
        <label>password</label>
            <input type='text' className='border border-black' onChange={(e)=>setPassword(e.target.value)}/>
            <button>submit</button>
            </form>

            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Users:</h3>
                {users.map((user, index) => (
                    <div key={index} className="border border-gray-300 rounded px-3 py-2 mb-2">{user.username}</div>
                ))}
            </div>
        </>
  )
}
export default reactform