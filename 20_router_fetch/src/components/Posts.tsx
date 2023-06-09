import React,{useContext} from "react";
import {AppContext, IPost } from "../utils/util";

// interface IPost {
//     id: number;
//     title: string;
//     body: string;
// }

const Posts: React.FC<{ posts: IPost[] }> = ({ posts }) => {

    const dataFromAppContext = useContext(AppContext);
    const postsFromAppContext = dataFromAppContext?.posts|| [];

    return (
        <>
            <h2>Posts</h2>
            {postsFromAppContext.map(post => (
                <div key={post.id} className='user'>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </div>
            ))}
        </>
    );
};

export default Posts;