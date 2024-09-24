import { Link } from "react-router-dom";

const Header = () => {
    const navItemsStyle = {
        display: 'flex',
        gap: '15px'
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2>Navbar</h2>
            <nav style={navItemsStyle}>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;