import { Routes, Route } from "react-router-dom";

import { Login, Join, Todo, AuthPage } from "./pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/join" element={<Join></Join>}></Route>
      <Route
        path="/todo"
        element={
          <AuthPage>
            <Todo></Todo>
          </AuthPage>
        }
      ></Route>
    </Routes>
  );
};

export default Routers;
