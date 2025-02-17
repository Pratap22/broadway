import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchPosts } from "../reducers/post";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
