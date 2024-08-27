import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import { lazy } from "react";
//import Glossary from "./components/Glossary";

/* 
* 1. Header 
  - logo
  - nav
* 2. Body
  - Search
  - RestaurantContainer
    - RestaurantCard
        - Image
        - Name
        - Rating
        - cuisine
        - Address
        - Phone
        - Website
* 3. Footer
 - copyright
 - Links
 - Address
 - Contact
*/



//---------------------Lazy loading-------------------  
const Glossary = React.lazy(() => import("./components/Glossary")); 




const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <HeaderComponent />
            {/* Body */}
            {/* <BodyComponent /> */}

            <Outlet />
           
        </div>   
    )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
        // children: [{
        //   path: "/restaurants/:id",
        //   element: <RestaurantDetails />
        // }]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      { 
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantDetails />
      },
      {
        path: "/glossary",
        element: <Suspense fallback={<h1>loading......</h1>} >
                    <Glossary />
                </Suspense>
      }

    ],
    errorElement: <Error />
  },
 
  // {
  //   path: "/contact",
  //   element: Contact
  // }
]);

const root  = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />);

//------use router provider to provide the router to the app

root.render(<RouterProvider router = { appRouter } />);




























































