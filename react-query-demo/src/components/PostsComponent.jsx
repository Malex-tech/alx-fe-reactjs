import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 30000, // cache valid for 30 seconds
    cacheTime: 60000, // cache stays for 60 seconds
  });

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-600">
        <p>Error fetching posts: {error.message}</p>
        <button
          onClick={() => refetch()}
          className="mt-3 bg-red-500 text-white px-3 py-2 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border-b pb-2">
            <h3 className="font-semibold text-gray-800">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
