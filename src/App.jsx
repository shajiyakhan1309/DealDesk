import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Calculation from "./Components/Calculation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const router = new createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    {
      path:"/contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path:"/aboutUs",
      element: <><Navbar/><AboutUs/></>
    },
  ])

  return (
    <>
          <RouterProvider router={router}/>

      <Main />
      <div className="Container">
        <Calculation />
      </div>

      <Footer />

    </>
  );
}

export default App;
