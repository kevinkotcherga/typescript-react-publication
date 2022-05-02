import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PostDetail from "../components/PostDetail";
import { PostData } from "../interfaces";

type PostParams = {
    id: string
  }

const Post = () => {
  const { id } = useParams<PostParams>();
  const [onePost, setOnePost] = useState<PostData | null> (null);

  console.log(onePost);

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      // data est égal à PostData
      const data:PostData = await response.json();
      // si ici j'ecris setAllPosts(2), typescript me l'interdira parce que ce n'est pas PostData ou null
      // Ca évite les erreurs
      setOnePost(data);
    }
    getPost();
  }, [id]);

  return (
    <div className="post-container">
      <h1>Details de la publication</h1>
      <PostDetail onePost={onePost}/>
    </div>
  )
}

export default Post
