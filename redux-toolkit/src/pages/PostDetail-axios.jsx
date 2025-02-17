import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../config/axios"

const PostDetail = () => {
  const { id } = useParams();

  const [postDetail, setPostDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/posts/${id}`
        );

        setPostDetail(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        alert("Some error occured while fetching api");
      }
    };

    fetchPostDetail();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading ..... </p>
      </div>
    );
  }
  return (
    <div>
      <h2>{postDetail.title}</h2>
      <div>{postDetail.body}</div>
    </div>
  );
};

export default PostDetail;
