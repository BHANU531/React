import { useRouteError } from "react-router-dom";

const Error = () => {

    let error = useRouteError();
    console.log(error);

    return (<div>
        <h1>Oooops</h1>
        <h1>Something went wrong</h1>
        <p style={{fontSize:'100px'}}>
            {error.data}
        </p>
    </div>);
}

export default Error;