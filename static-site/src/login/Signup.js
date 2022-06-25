import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {

    const [logData, setData] = useState({username:"", email:"", password:""})
    const addData = (e) =>{
        const{name, value} = e.target
        console.log(logData)
        setData(()=>{
            return{
                ...logData,
                [name]:value
            }
        })
    }
    // Add Data in Database
    const insertUser = async (e)=>{
        e.preventDefault();
        const{username, email, password} = logData;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "res.charset" : "utf-8" 
            },
            body: JSON.stringify({ username, email, password})
        });
        const data = await res.json();
        console.log(data);

        if(!data || res.status === 404){
            console.log(res.json);
            alert("Error");
        }else{
            console.log("User register sucssesful");
            alert("User register sucssesful");
            window.location.href = "/signin";
        }
    }
    


  return (
    <div>
        <div className=' signup'>
            <div class="row text-center tab">
                <div class="col-6">
                    <NavLink to="/signin" className="nav-a px-2 text-white">Sign in</NavLink>
                </div>
                <div class="col-6">
                    <NavLink to="/signup" className="nav-a px-2 text-white">Sign-up</NavLink>
                </div>
            </div>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" onChange={addData} name="username" value={logData.name} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" onChange={addData} name="email" value={logData.email} aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password" onChange={addData} name="password" value={logData.password} />
                </div>
                <button type="submit" class="btn btn-primary w-100 my-3" onClick={insertUser} >Submit</button>
               {/* <NavLink to="/signin"><button type="submit" class="btn btn-primary w-100 my-3">Sign in</button></NavLink> */}
            </form>
        </div> 
    </div>
  )
}

export default Signup

