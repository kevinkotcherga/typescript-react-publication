import { useEffect, useState } from 'react';
import {PostData} from '../interfaces'
import PostsList from '../components/PostsList';
import './posts.scss';

const Posts: React.FC = () => {
  // useState n'accepte que les données de type PostData ou null, PostData étant un tableau puisque nous avons plusieurs données
  const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
  const [numberOfPosts, setNumberOfPosts] = useState<number>(5);

  const localOrStateNumber = () => localStorage.getItem('number') || numberOfPosts;

  const localOrStateNum = localOrStateNumber();

  // Récupération de la data avec fetch
  useEffect(() => {
    const getPost = async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNum}`);
      // data est égal à PostData
      const data:PostData[] = await response.json();
      // si ici j'ecris setAllPosts(2), typescript me l'interdira parce que ce n'est pas PostData ou null
      // Ca évite les erreurs
      setAllPosts(data);
    }
    getPost();
    // numberOfPosts est à la fin pour afficher le nombres de posts souhaité
  }, [localOrStateNum]);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    // + permet de convertir une chaine de caractère 'string' en nombre
    setNumberOfPosts(+e.target.value);
    // localStorage permet de garder la valeur de l'input
    localStorage.setItem('number', e.target.value);
  }

  return (
    <div className="post-container">
      <h1>Page principale</h1>
      <div style={{display: 'flex', flexDirection : 'column'}}>
        <label htmlFor="posts">Nombre de publication {localOrStateNum}</label>
        <input type="range" min={1} max={20} onChange={onChange} defaultValue={localOrStateNum} />
        <PostsList allPosts={allPosts}/>
      </div>
    </div>
  )
}

export default Posts
