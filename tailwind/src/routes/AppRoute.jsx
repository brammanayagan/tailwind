import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problem1" element={<Proble />} />
      <Route path="/problem2" element={<Problem2 />} />
      <Route path="/problem3" element={<Problem3 />} />
    </Routes>
  );
};

export default AppRoute;
