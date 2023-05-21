import React, {useState}from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"


export default function Register() {

  const [user, setUser] = useState({});

  const navigate = useNavigate()

  function handleChange(e) {
    setUser({
        ...user, [e.target.name]: e.target.value
    })
}
console.log(user,"these are user details");

let url = "http://localhost:5000/auth/register"
        
    async function handleclick ()
    {
      console.log("here");
        const response = await axios.post(url, user)  
        console.log(response.data);
        navigate("/login")  

    }
  return (
    <div>
         <input type='text' placeholder='Name' name='username' onChange={handleChange} />
         <input type='text' placeholder='email' name='email' onChange={handleChange} />
         <input type='text' placeholder='password' name='password' onChange={handleChange} />
         <input type='submit' onClick={handleclick} />


    </div>
  )
}
