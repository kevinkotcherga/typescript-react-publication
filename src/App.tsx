import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Post from './pages/Post';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Posts />}></Route>
          <Route path='/:id' element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
