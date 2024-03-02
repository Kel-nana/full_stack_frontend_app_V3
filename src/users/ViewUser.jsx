import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { InputField } from '../UI/InputField'

export const ViewUser = ({ id , back }) => {

    console.log(id, "user id ")
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  useEffect(() => {
    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/user/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    loadUser();
}, [id]);
const homePage = ()=> {
back(null)
}
  return (
    <section>
        <h1>View User</h1>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <form>
          <InputField
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={user.name}
              readOnly
            />
            <InputField
              label="Username"
              type="text"
              placeholder="Enter your username"
              name="username"
              value={user.username}
              readOnly
            />
            <InputField
              label="Email"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={user.email}
              readOnly
            />
            <button onClick={homePage} className="btn btn-outline-danger mx-3">Cancel</button>
          </form>
        </div>
      </div>
    </div>
    </section>
  )
}
