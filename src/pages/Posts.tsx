import { useEffect, useState } from 'react';
import PostsList from '../components/PostsList';
import './posts.scss';

const Posts: React.FC = () => {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    const getPost = async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=');
      const data = await response.json();
      setAllPosts(data);
    }
    getPost();

  }, [])

  return (
    <div className="post-container">
      <h1>Page principale</h1>
      <div style={{display: 'flex', flexDirection : 'column'}}>
        <label htmlFor="posts">Nombre de publication 5</label>
        <input type="range" min={1} max={20} />
        <PostsList />
      </div>
    </div>
  )
}

export default Posts
