import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/api';

const PostDetail = () => {
    const {id} = useParams();
    const [post,setPost] = useState(null);

    useEffect(()=>{
        const fetchPost = async () => {
            const post = await getPostById(id);
            setPost(post);
        };
        fetchPost();
    }, [id]);

    if(!post) 
        return <div>Loading...</div>; 
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>    
    </div>
  );
};

export default PostDetail;
