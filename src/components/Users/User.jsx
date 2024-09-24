import { Link } from "react-router-dom";


const User = ({ user }) => {
    // console.log(user);

    const { id, name, email, phone } = user;

    const userStyle = {
        border: '2px solid cyan',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={userStyle}>
            <p>User ID {id || 0} Loading...</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;