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
    <div>
     <h1>Posts</h1>
      <ul>
        {posts.map(post => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>
                 {post.title}
              </Link>
            </li>
        ))}
      </ul>    
    </div>
  );
};

export default PostList;
