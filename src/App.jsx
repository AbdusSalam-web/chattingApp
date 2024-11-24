import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import app from "./firebas.config";
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home";
import ResetPassword from "./components/resetPassword/ResetPassword";
import LayoutMain from "./layout/LayoutMain";
import Alluserpage from "./pages/Alluserpage";
import FriendRequest from "./components/friendRequest/FriendRequest";
function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/alluser" element={<Alluserpage />} />
          <Route path="/friendReq" element={<FriendRequest />} />
        </Route>
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRoute} />
      <ToastContainer />
    </>
  );
}

export default App;
