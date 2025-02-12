import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResturantMenu from "./pages/ResturantMenu";

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "", element: <Home /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "restuarants/:resId", element: <ResturantMenu/> },

    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
