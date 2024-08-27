import { useRouteError } from "react-router-dom";

const Error = () => {
const err = useRouteError();
console.log(err);

    return (
        <div className="error">
            <h1>404</h1>
            <p>Page not found</p>
             {/* <p>Error Message : {err.error.message}</p> */}
        </div>
    )
};

export default Error;