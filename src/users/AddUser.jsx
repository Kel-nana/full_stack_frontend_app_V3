import React from 'react'

export const AddUser = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2>Register</h2>
          <div className='mb-3'>
            <label htmlFor="Name">Name</label>
            <input 
            type="text"
            className='form-control'
            placeholder='Enter your name'
            name='name'
             />
          </div>
          <div className='mb-3'>
            <label htmlFor="Username">Username</label>
            <input 
            type="text"
            className='form-control'
            placeholder='Enter your username'
            username='username'
             />
          </div>
          <div className='mb-3'>
            <label htmlFor="Email">Email</label>
            <input 
            type="text"
            className='form-control'
            placeholder='Enter your email'
            email='email'
             />
          </div>
          <button type="button" className="btn btn-outline-success mx-3">Submit</button>
          <button type="button" className="btn btn-outline-danger mx-3">Cancel</button>
        </div>
      </div>
    </div>
  )
}
