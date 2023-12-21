import React, { useEffect, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {
  
  const [posts, setPosts] = useState([ ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  useEffect(() => {
    fetchPosts();
  }, [ ]);
  
  const createPost = (newPost) => {
    setPosts ([...posts, newPost]);
    setModal (false)
  }

  async function fetchPosts () {
    const posts = await PostService.getAll();
    setPosts(posts);
  }

  // Получаем post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}> 
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} remove={removePost} title='Посты про JS' />
    </div>
  );
}

export default App;
