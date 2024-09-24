import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <p>This is the home component</p>
            <Outlet />
        </div>
    );
};

export default Home;