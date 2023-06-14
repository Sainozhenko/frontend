import React from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from './store/store';
import { setPage } from './reducer/reducers';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state:RootState)=>state.users.users);
  const currentPage = useSelector((state:RootState)=> state.users.currentPage);
  const totalPage = Math.ceil(users.length /  10);

  const handlePageChange = (page:number) =>{
    dispatch(setPage(page));
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
