import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../store/store';


const renderUsers = () => {
    // const dispatch = useDispatch();
    const users = useSelector((state:RootState)=>state.users.users);
    const currentPage = useSelector((state:RootState)=> state.users.currentPage);
    const totalPage = Math.ceil(users.length /  10);

    const startIndex = (currentPage-1)*10;
    const endIndex = startIndex+10;
    const currentUsers = users.slice(startIndex,endIndex);
  
    return currentUsers.map(user =>(
      <div key={user.id}>{user.name}</div>
    ))
  }

  export default renderUsers;