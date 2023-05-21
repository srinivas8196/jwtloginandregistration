import React, { useState } from 'react'
import axios from 'axios'


export default function Login() {
    const [user, setUser] = useState({});

    function handleChange(e) {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    let url = "http://localhost:5000/auth/login"
        
    async function handleclick ()
    {
        const response = await axios.post(url, user)  
        console.log(response.data);  
    }


return (

         <>
         <input type='text' placeholder='email' name='email' onChange={handleChange} />
         <input type='text' placeholder='password' name='password' onChange={handleChange} />
         <input type='submit' onClick={handleclick} />
        
         </>
    
    ) 
}