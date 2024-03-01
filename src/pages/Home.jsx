import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './home.module.css';

export const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const loadUsers =async ()=> {
            let result = await axios.get("http://localhost:8080/users");
            result= result.data
            setUsers(result)
        }
loadUsers()
    }, [])

    console.log(users, 'DATA FETCHED')
    // const userData = users.map((user, index)=> {
    //   <tr key={user.id}>
    //   <th scope="row">{index}</th>
    //   <td>{user.name}</td>
    //   <td>{user.username}</td>
    //   <td>{user.email}</td>
    // </tr>
    // });
    const userData = users.map((user, index) => (
      <tr key={user.id}>
          <th scope="row">{index}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
      </tr>
  ));


  return (
    <div className={`container ${classes.home_table}`}>
        <div className='py-4'>
        <table className="table table-striped table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {userData}
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}
