import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Page principale</h1>}></Route>
          <Route path='/:id' element={<h1>Page detail</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
