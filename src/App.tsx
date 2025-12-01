import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import posts from "./data/posts";

export default function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {selectedPost ? <BlogPost post={selectedPost} goBack={() => setSelectedPost(null)} /> : <Home posts={posts} onSelectPost={setSelectedPost} />}
    </div>
  );
}
