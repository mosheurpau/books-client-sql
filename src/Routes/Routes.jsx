import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home/Home";
import AddBook from "../pages/AddBook/AddBook";
import UpdateBooks from "../pages/UpdateBooks/UpdateBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddBook></AddBook>,
      },
      {
        path: "/update",
        element: <UpdateBooks></UpdateBooks>,
      },
    ],
  },
]);
