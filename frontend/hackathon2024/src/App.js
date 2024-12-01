import './App.css';
import Home from './components/pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/pages/page1';
import Quiz from './components/pages/quiz';
import PageNotFound from './components/pages/pageNotFound';
import Search from './components/pages/search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
