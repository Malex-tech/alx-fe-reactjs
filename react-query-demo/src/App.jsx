import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent.jsx";
import { ReactQueryDevtools } from "react-query/devtools";
import PostsComponent from './PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          React Query Demo – Fetching Posts
        </h1>
        <PostsComponent />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
