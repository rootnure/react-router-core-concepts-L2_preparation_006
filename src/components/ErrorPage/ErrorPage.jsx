import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <>
                    <h3>Page not Found</h3>
                    <p>Go Back To Home</p>
                    <Link to="/"><button>Home</button></Link>
                </>
            }
        </div>
    );
};

export default ErrorPage;