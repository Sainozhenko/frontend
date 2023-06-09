import React, { useContext } from 'react';
import { AppContext, IUser } from '../utils/util';

// interface IUser {
//     id: number;
//     name: string;
//     email: string;
// }

// const style = {
//     backgroundColor: 'pink'
// }

const Users: React.FC<{ users: IUser[] }> = ({ users }) => {
    console.log(users);
    //Помещаем в usersFromContext информацию переданную от роидтельского компонента App 
    // const usersFromContext:IUser[] = useContext(Context);
    const dataFromAppContext = useContext(AppContext);
    const usersFromAppContext = dataFromAppContext?.users|| [];
    
    return (
        <>
            <h2>Users</h2>
            {usersFromAppContext.map(user => (
                // style= {style}
                <div style={{backgroundColor: 'pink'}} key={user.id} className='user'>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </>
    );
};

export default Users;