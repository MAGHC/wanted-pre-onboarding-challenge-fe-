import { Routes, Route } from "react-router-dom";

import { Login, Join, Todo } from "./pages";

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
