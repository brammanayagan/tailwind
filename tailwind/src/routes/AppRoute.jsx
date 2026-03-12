import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Finacial from "../pages/Finacial";
import Social from "../pages/Social";
import Academic from "../pages/Academic";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/financial" element={<Finacial />} />
      <Route path="/social" element={<Social />} />
      <Route path="/academic" element={<Academic />} />
    </Routes>
  );
};

export default AppRoute;
