
import './App.css';
import DataFetcher from './components/DataFetcher';
import { setComments, setPhotos, setPosts, setUsers } from './reducer/reducers';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Users from './components/Users';
import Photos from './components/Photos';
// import { setPage } from './reducer/reducers';

function App() {
  // const dispatch = useDispatch();
  // const users = useSelector((state:RootState)=>state.users.users);
  // const currentPage = useSelector((state:RootState)=> state.users.currentPage);
  // const totalPage = Math.ceil(users.length /  10);

  // const handlePageChange = (page:number) =>{
  //   dispatch(setPage(page));
  // }

  return (
    <div className="App">
      <DataFetcher 
      endpoint='https://jsonplaceholder.typicode.com/users' 
      action={setUsers}
      />
        <DataFetcher 
      endpoint='https://jsonplaceholder.typicode.com/posts' 
      action={setPosts}
      />
        <DataFetcher 
      endpoint='https://jsonplaceholder.typicode.com/comments' 
      action={setComments}
      />
      <DataFetcher 
      endpoint='https://jsonplaceholder.typicode.com/photos' 
      action={setPhotos}
      />
      <Posts/>
      <Comments/>
      <Users/>
      <Photos/>
    </div>
  );
}

export default App;