import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">COLLEGE TRUTH </div>

        <ul className="flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/financial">Finacial</Link>
          </li>
          <li>
            <Link to="/social">Social</Link>
          </li>
          <li>
            <Link to="/academic">Academic</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
