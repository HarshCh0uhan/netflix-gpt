import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

const Body = () => {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login/>
  //   },
  //   {
  //     path: "/browser",
  //     element: <Browse/>
  //   }
  // ])

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </>

    // <div>
    //   <RouterProvider router={appRouter}/>
    // </div>
  );
};

export default Body;
