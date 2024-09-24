import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const navItemsStyle = {
        display: 'flex',
        gap: '15px'
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2>My Website</h2>
            <nav style={navItemsStyle}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;