const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Main/Main");


const route = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<h1>Home</h1>
            }
        ]
    }
])

export default route;