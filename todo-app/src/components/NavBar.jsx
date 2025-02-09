import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        My Blog
      </Link>
      <div className="space-x-4 flex items-center">
        <Link
          to="/"
          className={`hover:underline ${
            location.pathname === "/" ? "font-bold border-b-2 border-white" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/blogs"
          className={`hover:underline ${
            location.pathname === "/blogs"
              ? "font-bold border-b-2 border-white"
              : ""
          }`}
        >
          Blogs
        </Link>
        <Link
          to="/about"
          className={`hover:underline ${
            location.pathname === "/about"
              ? "font-bold border-b-2 border-white"
              : ""
          }`}
        >
          About
        </Link>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
