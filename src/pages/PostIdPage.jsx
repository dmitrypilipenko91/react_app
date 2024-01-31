import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const params = useParams();
  
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data)
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data)
  });
  
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id)
  }, []);
  
  return (
    <div>
      <h3>Пост c id = {params.id}</h3>
      {isLoading
        ? <MyLoader/>
        : <div>{post.body}</div>}
      <h3>Комментарии:</h3>
      {isComLoading
        ? <MyLoader/>
        : <div>
            {comments.map(comm => 
                <div key={comm.id} style={{marginTop: '15px'}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}  
          </div>}
    </div>
  )
}
export default PostIdPage;