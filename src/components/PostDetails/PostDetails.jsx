import { useLoaderData } from "react-router-dom";

const PostDetails = () => {

    const postDetails = useLoaderData();

    const { id, userId, title, body } = postDetails;

    const postDetailsStyle = {
        backgroundColor: 'lightskyblue',
        padding: '2px 10px',
        borderRadius: '5px'
    }

    return (
        <div style={postDetailsStyle}>
            <h4>ID {id} Posted by {userId}</h4>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;