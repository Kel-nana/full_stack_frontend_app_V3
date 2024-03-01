import React, { useState, useEffect } from 'react';
import { InputField } from '../UI/InputField'

export const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });
console.log(user, "user input data")
  const {name, username, email} =user;

  const onInputChange = (e)=> {
setUser({...user,[e.target.name]: e.target.value});
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2>Register</h2>
          <form>
          <InputField
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={user.name}
              onChange={onInputChange}
            />
            <InputField
              label="Username"
              type="text"
              placeholder="Enter your username"
              name="username"
              value={user.username}
              onChange={onInputChange}
            />
            <InputField
              label="Email"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={user.email}
              onChange={onInputChange}
            />

            <button type="button" className="btn btn-outline-success mx-3" >Submit</button>
            <button type="button" className="btn btn-outline-danger mx-3">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  )
}
