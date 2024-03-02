import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classes from './home.module.css';
import { ViewUser } from '../users/ViewUser';

export const Home = () => {
    const [users, setUsers] = useState([]);
    const [viewUserId, setViewUserId] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    console.log(viewUserId, 'view user id')

    const viewUserFunction = (userId) => {
        setViewUserId(userId);
    }
    
    const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
          setUsers(result.data);
      } 
    const deleteUser = async (userId)=> {
        await axios.delete(`http://localhost:8080/user/${userId}`);
        loadUsers();
      };

        
    const userData = users.map((user, index) => (
        <tr key={user.id}>
            <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <button type="button" className="btn btn-primary" onClick={() => viewUserFunction(user.id)}>View</button>
                <Link to={`/editUser/${user.id}`} className="btn btn-outline-info">Edit</Link>
                <button type="button" className="btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</button>
            </td>
        </tr>
    ));

    return (
        <div className={`container ${classes.home_table}`}>
            <div className='py-4'>
                {viewUserId ? (
                    <div>
                        <ViewUser id={viewUserId} back={() => viewUserFunction()} />
                    </div>
                ) : (
                    <table className="table table-striped table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
