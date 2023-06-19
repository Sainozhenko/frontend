// import React from 'react'
// import { useSelector } from 'react-redux';
// import { DataState } from '../reducer/reducers';

// const Users:React.FC = () => {
//   const users = useSelector((state: {data: DataState}) => state.data.users);

//   return (
//     <div>
//       <h2>Users:</h2>
// <ul>
//             {users.map((user) => (
//           <li key={user.id}>{user.name} </li>
//   ))}
//             </ul>
//     </div>
//   )
// }

// export default Users;

import React from 'react'
import { useSelector } from 'react-redux';
import { DataState } from '../reducer/reducers';

const Users = () => {
const users = useSelector((state:{data:DataState})=>state.data.users);
  return (
    <>
      <h2>Users:</h2>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Users;