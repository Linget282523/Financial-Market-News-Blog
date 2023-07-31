
import './App.css';
import Articles from './components/Arcticles';
import Article from './components/Article';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/articles/:title' element={<Article/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
