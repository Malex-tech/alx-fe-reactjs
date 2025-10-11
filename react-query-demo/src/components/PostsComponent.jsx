import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

function PostsComponent() {
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    refetchOnWindowFocus: true, // ✅ demonstrate background refetching
    keepPreviousData: true,     // ✅ cache and keep old data while refetching
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts 😞</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : '🔁 Refetch Posts'}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
        Cached Data: {isFetching ? 'Updating…' : 'Fresh'}
      </p>
    </div>
  );
}

export default PostsComponent;

