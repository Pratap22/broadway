import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../config/axios"
import { useState } from "react";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "/posts"
      );

      setPosts(response.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading ....</p>
      </div>
    );
  }
  return (
    <div style={{ margin: "20px 20px" }}>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px",
            borderColor: "blue",
            borderStyle: "solid",
            marginBottom: 8,
            padding: 8,
            cursor: "pointer",
          }}
          onClick={() => navigate(`/${post.id}`)}
        >
          <h2>{post.title}</h2>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
