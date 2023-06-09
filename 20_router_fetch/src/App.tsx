import React, { useEffect, useState } from "react";
import "./App.css";
import {Routes, Route, Link} from 'react-router-dom';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import { AppContext, IComment, IPost,IUser } from "./utils/util";

const baseUrl = "https://jsonplaceholder.typicode.com";

// interface IUser {
//     id: number;
//     name: string;
//     email: string;
// }

// interface IComment {
//     id: number;
//     body: string;
// }

// interface IPost {
//     id: number;
//     title: string;
//     body: string;
// }

enum MenuItems {
    Users = "users",
    Comments = "comments",
    Posts = "posts",
}
function App() {
  // создали 3 состояния для сохранения данных после одного
  // из трёх потенциальных запросов на сервер
  const [users, setUsers] = useState<IUser[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
      fetchData(MenuItems.Users);
      fetchData(MenuItems.Comments);
      fetchData(MenuItems.Posts);
  }, []);
const fetchData = async (menuItem: MenuItems) => {
  try {
      // Реализуем запрос на сервер в зависимости от того, что принимаем в качестве параметра 
      const response = await fetch(`${baseUrl}/${menuItem}`);
      const data = await response.json();

      switch (menuItem) {
          case MenuItems.Users:
              setUsers(data);
              break;
          case MenuItems.Comments:
              setComments(data);
              break;
          case MenuItems.Posts:
              setPosts(data);
              break;
          default: break;
      }
  } catch (error) {
      console.log(error);
  }
};

  return (
    <AppContext.Provider value={{users, comments, posts}}>
    {/* <Context.Provider value={users}> */}
    <Routes>
      {/* В Route в атрибуте path указывается путь, по которому будет отображён
      тот компонент, который указан в атрибуте element */}
      <Route path="/" element={<>
          {/* В компоненте Link в атрибуте to указывается адрес, по которому произойдёт переход при клике */}
          <Link to="/users"><button>Users</button></Link>
          <Link to="/posts"><button>Posts</button></Link>
          <Link to="/comments"><button>Comments</button></Link>
      </>} />
      {/* <Users (название компонента) users (атрибут компонента)={users} (значение атрибута)/>
      => здесь в атрибуте users передаётся в компонент информация о пользователях, полученная с сервера */}
      <Route path="/users" element={<Users users={users}/>} />
      <Route path="/posts" element={<Posts posts={posts}/>} />
      <Route path="/comments" element={<Comments comments={comments}/>} />
    </Routes>
    {/* </Context.Provider> */}
    </AppContext.Provider>
  );
}

export default App;
