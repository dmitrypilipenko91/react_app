import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    
  const [post, setPost] = useState({body: '', title: ''});
  
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost);
    setPost({body: '', title: ''})
  }
    
    return (
        
        <form>
        {/* Управляемый компонент (инпут) */}
        <MyInput type='text' 
        placeholder='Название статьи' 
        value={post.title}
        onChange={event => setPost({...post, title: event.target.value})}>
        </MyInput>
        <MyInput type='text' 
        placeholder='Описание статьи'
        value={post.body}
        onChange={event => setPost({...post, body: event.target.value})}>
        </MyInput>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    )
};

export default PostForm;