import { Link } from 'react-router-dom';
import { PostData } from '../interfaces/Posts';

interface PostDetailProps {
  onePost: PostData | null
}

const PostDetail: React.FC<PostDetailProps> = ({ onePost }) => {
  return (
    <div>
      <h1>Publication numéro: {onePost?.id}</h1>
      <h2>Titre : {onePost?.title}</h2>
      <p>{onePost?.body}</p>
      <Link to="/">Page principale</Link>
    </div>
  )
}

export default PostDetail;
