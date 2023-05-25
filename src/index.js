import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Opener from "./routes/opener";
import SignUp from "./routes/signup";
import Verify from "./routes/verify";
import Choose from "./routes/choose";
import Finish from "./routes/finish";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "signup_page",
        element: <SignUp/>,
      },
       {
        path: "",
        element: <Opener/>,
      },
      {
        path: "verify_page",
        element: <Verify/>,
      },
      {
        path: "choose_page",
        element: <Choose/>,
      },
      {
        path: "finish_page",
        element: <Finish/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);