import { Outlet } from "react-router";
import Navbar from "../components/NavBar";

const HomeLayout = ({ children }) => {
  return (
    <div id="home-layout">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
