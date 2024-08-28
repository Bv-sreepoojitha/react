import React from "react";
import {createRoot} from "react-dom/client";
import About from "./about";
import Contact from "./contact";
import Header from "./header";
import Body from "./body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";



const rootReact=createRoot(document.getElementById("root"))
const Applayout=()=>{
    return(
    <div className="app-layout">
        <Header/>
        <Body/>


    </div>
    );
    };
    rootReact.render(<Applayout/>)
    
    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Applayout />,
          children: [
            {
              path:"/home",
              element:<body/>,
            },
            {
              path:"/about",
            element:<About/>,
            },
            {
              path:"/Contact",
              element:<Contact/>,
            },
          ],
         
        },
      ]);
      
      // rootReact.render(<AppRoot />);
      rootReact.render(<RouterProvider router={appRouter} />);

      