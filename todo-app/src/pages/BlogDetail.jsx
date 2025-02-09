import { useParams } from "react-router";
import { blogs } from "./Blogs";

const BlogDetail = () => {
  let { id } = useParams();
  const blog = blogs[id];

  if (!blog) {
    return <div className="p-6 text-center text-red-500">Blog not found</div>;
  }

  return (
    <div>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-2">
          {blog.date} - {blog.author}
        </p>
        <p className="text-lg text-gray-700 mt-4">{blog.detail}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
