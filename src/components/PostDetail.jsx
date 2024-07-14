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
        return <div className='text-red-400 text-xl p-4 font bold shadow rounded'>Loading...</div>; 
  return (
    <div className='p-6 container mx-auto '>
      <div className='bg-white p-6 shadow rounded"'>
        <h1 className='font-bold text-2xl capitalize mb-4 text-blue-500 '>{post.title}</h1>
        <p className='text-justify text-xl'>{post.body}.</p>
      </div>    
    </div>
  );
};

export default PostDetail;
