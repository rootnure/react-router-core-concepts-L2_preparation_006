import { useLoaderData } from "react-router-dom";
import User from "./User";
import './Users.css';

const Users = () => {

    /* API data load (React Router Hook [using loader and useLoaderData()]) */
    const users = useLoaderData();

    /** API Data Load (Traditional Way)
     * 1. useState --> to hold data
     * 2. useEffect --> to handle side effect
     * 3. fetch --> to load data
     * 4. set data to state
     */

    console.log(users);

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Bhodro Bacca Users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;