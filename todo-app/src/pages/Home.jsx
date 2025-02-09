import { Link } from "react-router";

const Home = () => {
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
      </div>
    </div>
  );
};

export default Home;
