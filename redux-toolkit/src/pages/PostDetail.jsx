import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const postDetail = useSelector((state) =>
    (state.post.posts || []).find((post) => post.id === Number(id))
  );

  return (
    <div>
      <h2>{postDetail.title}</h2>
      <div>{postDetail.body}</div>
    </div>
  );
};

export default PostDetail;
