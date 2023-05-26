import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Gallery from "../../Gallery/Gallery";
import Home from "../../Home/Home/Home";
import Management from "../../Management/Management";
import News from "../../News/News";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Main/Main");

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "management",
        element: <Management></Management>,
      },
      {
        path: "news",
        element: <News></News>,
      },
      {
        path: "gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default route;
