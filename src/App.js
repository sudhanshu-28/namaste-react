import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/restaurant-menu";
import Shimmer from "./components/Shimmer";

// When our App grows, we can divide our app based on functionality into chunks and lazy load
// To reduce this Bundle size, we do code splitting, do this chunking, do this lazy loading
// Dynamic Import
// This all keys words - Chunking . Code Splitting / Dynamic Bundling / Lazy Loading - all are same thing
// Lazy Loading is also known as on-demand loading

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

// lazy is the named export provided by react to useActionData
// it takes callback function with import method which takes component path as argument

import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Sudhanshu Rai",
    };
    setTimeout(() => {
      setUserName(data?.name);
    }, 3000);
  }, []);

  // Overriding Default value
  // If you want to access updated value of AnyContext you need to wrap this Consumer over all Child components in which you want to get latest props data

  return (
    // Default value
    <UserContext.Provider value={{ loggedInUser: userName }}>
      {/* Sudhanshu Rai  */}
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          {/* Elon Musk  */}
          <Header />
        </UserContext.Provider>
        <div className="pt-16">
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          // <Suspense fallback={<h1>Loading Screen ...</h1>}> // Can pass JSX
          <Suspense
            fallback={<Shimmer />} // Can pass Component
          >
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
