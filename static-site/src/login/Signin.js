import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signin = () => {

    const [logData, setData] = useState(
        { email: "", password:""}
    )
    const addData = (e)=>{
        const {name, value} = e.target
        setData(()=>{
            return{
                ...logData,
                [name]:value
            }
        })
    }

// Check User in Database
 const checkUser = async (e) =>{
     e.preventDefault();
     const {email, password} = logData;
     const res = await fetch("/signin", {
         method: "POST",
         headers:{
            "Content-Type": "application/json",
            "res.charset" : "utf-8"
         },
         body: JSON.stringify({email,password})
     });
    const data =  await res.json();
    if(data.email){
        localStorage.setItem("token", "hbcbcbveverviueriuvbervbrbv");
        alert('You are login sucssesfully');
        console.log(data);
    }else{
        alert(data)
    }
 }


  return (
    <div>
        <div className='container'>
            <h1 className='text-center'>Sign in</h1>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email" value={logData.email}  onChange={addData} id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password" value={logData.password}  onChange={addData} />
                </div>
                <button type="submit" class="btn btn-primary w-100 my-3" onClick={checkUser}>Submit</button>
               <NavLink to="/signup"><button type="submit" class="btn btn-primary w-100 my-3">Sign up</button></NavLink>
            </form>
        </div>        
    </div>
  )
}

export default Signin
