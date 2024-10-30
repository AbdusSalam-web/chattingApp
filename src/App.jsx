import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Register />} />
        <Route path="/login" element = {<Login/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
}

export default App;
