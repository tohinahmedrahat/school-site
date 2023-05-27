import "./App.css";
import { RouterProvider } from "react-router-dom";
import route from "./Pages/Share/Route/Route";

function App() {
  return (
    <div className="App dark:bg-slate-900 dark:text-gray-100">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
