import React, { useState, useEffect } from 'react';

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
            <div className='mb-3'>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter your name'
                name='name'
                value={user.name}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter your username'
                name='username'
                value={user.username}
                onChange={onInputChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter your email'
                name='email'
                value={user.email}
                onChange={onInputChange}
              />
            </div>
            <button type="button" className="btn btn-outline-success mx-3" >Submit</button>
            <button type="button" className="btn btn-outline-danger mx-3">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  )
}
