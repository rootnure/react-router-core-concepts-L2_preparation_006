import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const postDetails = useLoaderData();
    const navigate = useNavigate();
    const { postId } = useParams();
    console.log(postId);

    const { id, userId, title, body } = postDetails;

    const postDetailsStyle = {
        backgroundColor: 'lightskyblue',
        padding: '2px 10px',
        borderRadius: '5px'
    }

    const handleGoBack = () => {
        navigate("/posts");
    }

    return (
        <div style={postDetailsStyle}>
            <h4>ID {id} Posted by {userId}</h4>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;