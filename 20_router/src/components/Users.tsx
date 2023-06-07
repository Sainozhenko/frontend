import React from 'react';
import {Link} from 'react-router-dom';

const Users = () => {
    return (
        <>
    <h2>Users</h2>
    
    <Link to="/"><button>Home</button></Link>
    <Link to="/about"><button>Contacts</button></Link>
    
    </>
    )}

export default Users;