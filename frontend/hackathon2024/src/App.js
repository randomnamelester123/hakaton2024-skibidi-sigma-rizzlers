import './App.css';
import Home from './components/pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/pages/page1';
import Quiz from './components/pages/quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </Router>
  );
}

export default App;
