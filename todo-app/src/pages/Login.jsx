import { useNavigate, useLocation } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  let { search } = useLocation();
  const params = new URLSearchParams(search);
  const to = params.get("to");

  const handleLogin = () => {
    localStorage.setItem("token", "dinesh");
    navigate(to ? to : "/");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
