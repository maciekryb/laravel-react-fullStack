import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Users from "./views/Users";

const router = createBrowserRouter([
  {
    path: " /login",
    elemtent: <Login />,
  },
  {
    path: " /signup",
    elemtent: <Signup />,
  },
  {
    path: " /Users",
    elemtent: <Users />,
  },
  {
    path: "*",
    elemtent: <NotFound />,
  },
]);

export default router;
