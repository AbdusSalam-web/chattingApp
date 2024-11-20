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
function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
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
