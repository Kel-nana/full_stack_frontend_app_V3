import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './home.module.css';

export const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const result = await axios.get("http://localhost:8080/users");
                setUsers(result.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        loadUsers();
    }, []);

    console.log(users, 'DATA FETCHED');

    const userData = users.map((user, index) => (
        <tr key={user.id}>
            <th scope="row">{index+1}</th>
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
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
