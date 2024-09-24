import { Link } from "react-router-dom";

const Post = ({ post }) => {

    const { id, title } = post;

    return (
        <div className="post">
            <h4>Post of ID: {id}</h4>
            <h3 style={{ textTransform: 'capitalize' }}>{title}</h3>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;