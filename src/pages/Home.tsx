import PostCard from "../components/PostCard";

export default function Home({ posts, onSelectPost }) {
  return (
    <div className="max-w-3xl mx-auto grid gap-4 px-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onClick={() => onSelectPost(post)} />
      ))}
    </div>
  );
}
