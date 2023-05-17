import About from "../../About/About";
import Home from "../../Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Main/Main");


const route = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"about",
                element:<About></About>
            }
        ]
    }
])

export default route;