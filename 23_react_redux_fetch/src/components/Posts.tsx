import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataState, setCurrentPagePosts } from "../reducer/reducers";

const Posts: React.FC = () => {
    // Любое изменение глобального state производим внутри метода dispatch()
    const dispatch = useDispatch();
    // С помощью хука useSelector() получаем информацию из глобального state

    //DRY- don`t repeat yourself 
    // const posts = useSelector((state: {data: DataState}) => state.data.posts);
    // const currentPage = useSelector((state: {data: DataState}) => state.data.currentPagePosts);
    // const postsPerPage = useSelector((state: {data: DataState}) => state.data.postsPerPage);
 
    const {posts, currentPage, postsPerPage} = useSelector((state:{data:DataState})=> state.data);

    // Индекс последнего поста на странице
    const indexOfLastPost = currentPage * postsPerPage;
    // Индекс первого поста на странице
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // Из массива со всеми постами (posts) получаем часть постов, необходимые для соответствующей страницы
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    // По клику на кнопку Previous page функция previousPage() меняет поле currentPage на единицу меньше
    const previousPage = () => {
        dispatch(setCurrentPagePosts(currentPage - 1));
    }

    // По клику на кнопку Next page функция nextPage() меняет поле currentPage на единицу больше
    const nextPage = () => {
        dispatch(setCurrentPagePosts(currentPage + 1));
    }

    return (
        <>
            <h2>Posts</h2>
            {/* Отображаем полученную выше часть постов в качестве элементов списка */}
            <ul>
                {currentPosts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            {/* 
                Атрибут disabled делает кнопку некликабельной,
                когда выражение, переданное в данный атрибут является true
            */}
            <button disabled={currentPage === 1} onClick={previousPage}>Previous page</button>
            <button disabled={indexOfLastPost >= posts.length} onClick={nextPage}>Next Page</button>
        </>
    );
};

export default Posts;