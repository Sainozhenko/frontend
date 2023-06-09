import React, {useContext} from "react";
import { IComment,AppContext } from "../utils/util";

// interface IComment {
//     id: number;
//     body: string;
// }

const Comments: React.FC<{ comments: IComment[] }> = ({ comments }) => {

    const dataFromAppContext = useContext(AppContext);
    const commentsFromAppContext = dataFromAppContext?.comments|| [];
    
    return (
        <>
            <h2>Comments</h2>
            {commentsFromAppContext.map(comment => (
                <div key={comment.id} className='user'>
                    <p>Body: {comment.body}</p>
                </div>
            ))}
        </>
    );
};

export default Comments;