import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../services/api";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        const fetchPosts = async () => {
            const posts = await getPosts();
            setPosts(posts);
        };
        fetchPosts();
    }, []);

  return (
    <div className="container mx-auto p-4">
     <h1 className="text-center text-4xl font-bold text-blue-500 py-4 uppercase">Posts</h1>
      <ul>
        {posts.map(post => (
            <li key={post.id}  className="mb-2 p-4 bg-white shadow rounded">
              <Link to={`/post/${post.id}`} className="text-lg hover:underline hover:text-blue-500">
                 {post.title}
              </Link>
            </li>
        ))}
      </ul>    
    </div>
  );
};

export default PostList;
