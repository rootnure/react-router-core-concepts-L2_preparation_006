import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();

    const { id, name, phone, username, website } = userDetails;

    const userDetailsStyles = {
        border: '2px slid brown',
        backgroundColor: 'lightgray',
        padding: '1px 20px',
        borderRadius: '5px'
    }

    return (
        <div style={userDetailsStyles}>
            <h2>Details about user {id}</h2>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Username: {username}</p>
            <p>Website: <a href={`https://${website}`} target="_blank">{website}</a></p>
        </div>
    );
};

export default UserDetails;