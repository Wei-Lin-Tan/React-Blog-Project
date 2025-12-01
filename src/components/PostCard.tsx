export default function PostCard({ post, onClick }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition" onClick={onClick}>
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.excerpt}</p>
    </div>
  );
}
