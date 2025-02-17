import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
