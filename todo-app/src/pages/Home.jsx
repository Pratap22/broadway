import { Link } from "react-router";
import A from "../components/PropDrill";
import React from "react";
import { ColorProvider } from "../context/theme";

const Home = () => {
  const [color, setColor] = React.useState("red");
  return (
    <div>
      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore a variety of articles on different topics.
        </p>
        <Link to="/blogs" className="text-blue-500 hover:underline text-lg">
          View Blogs
        </Link>
        <ColorProvider>
          <A color={color} setColor={setColor} />
        </ColorProvider>
      </div>
    </div>
  );
};

export default Home;
