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

  return (
    <div className={`container ${classes.home_table}`}>
        <div className='py-4'>
        <table className="table table-striped table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
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
