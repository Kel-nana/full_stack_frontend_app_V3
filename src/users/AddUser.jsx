import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { InputField } from '../UI/InputField'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const AddUser = ({ handleAddData, setDataAdd }) => {
  const location = useLocation();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });
  
  const locationAdd = location.pathname;
  
  useEffect(() => {
    handleAddData  (locationAdd);
  }, [locationAdd, handleAddData  ]);

  const onInputChange = (e)=> {
setUser({...user,[e.target.name]: e.target.value});
  }

  const setDataAddFunction = ()=> {
    setDataAdd(null)
  }

  const onSubmitHandler = async (e)=> {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/")
  };
  return (
    <div className='container user_container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2>Add User</h2>
          <form onSubmit={onSubmitHandler}>
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

            <button type="submit" className="btn btn-outline-success mx-3" >Submit</button>
            <Link to="/" className="btn btn-outline-danger mx-3"onClick={setDataAddFunction}>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
