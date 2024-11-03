import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home'; 
import Signin from '../pages/signin';
const router = createBrowserRouter([
    {
        path: "/", // This will match all paths
        element: <App />, // Main app component
        children: [
            {
                path: "", // Root path
                element: <Home /> // Home component
            },
            {
                path: "/signin", // Root path
                element: <Signin /> // Home component
                },
 
        ]
    }
]);

export default router;
