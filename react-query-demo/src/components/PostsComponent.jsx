import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

function PostsComponent() {
  // ✅ Include `error` in destructuring
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (isError) {
    // ✅ Display the error message explicitly
    return (
      <div style={{ color: 'red', padding: '1rem' }}>
        <p>❌ Error fetching posts:</p>
        <pre>{error.message}</pre>
      </div>
    );
  }

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
