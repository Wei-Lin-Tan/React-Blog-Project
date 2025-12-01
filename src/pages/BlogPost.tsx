export default function BlogPost({ post, goBack }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <button onClick={goBack} className="mb-4 text-blue-500 hover:underline">
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-7">{post.content}</p>
    </div>
  );
}
