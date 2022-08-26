import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Join from "./pages/Join";
import Todo from "./pages/Todo";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/join" element={<Join></Join>}></Route>
      <Route path="/todo" element={<Todo></Todo>}></Route>
    </Routes>
  );
};

export default Routers;
