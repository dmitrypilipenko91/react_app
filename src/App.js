import React, {useRef, useState} from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyInput from './components/UI/button/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';

function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ])

  const [post, setPost] = useState({body: '', title: ''});
  
  const addNewPost = (event) => {
    event.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({body: '', title: ''})
  }

  return (
    <div className="App">
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
      <PostList posts={posts} title='Посты про JS'/>
    </div>
  );
}

export default App;
