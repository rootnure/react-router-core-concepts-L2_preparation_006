import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const navigate = useNavigate();

    const { id, title } = post;

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div className="post">
            <h4>Post of ID: {id}</h4>
            <h3 style={{ textTransform: 'capitalize' }}>{title}</h3>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <br />
            <br />
            <button onClick={handleShowDetails}>Click To See Details</button>
        </div>
    );
};

export default Post;