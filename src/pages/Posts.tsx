import PostsList from '../components/PostsList'
import './posts.scss'

const Posts = () => {
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
