import BlogDetail from "./pages/BlogDetail";
import Blogs from "./pages/Blogs";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import HomeLayout from "./layout/HomeLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route element={<AuthLayout />}>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
