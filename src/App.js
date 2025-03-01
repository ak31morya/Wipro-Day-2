import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Calc from './components/calcu/calcu';
import First from './components/first';
import Login from './components/login/login';
import Second from './components/second/second';
import Third from './components/third/third';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>WELCOME! This is the main page</h1>
        <nav>
          <ul>
            <li><Link to="/first">First</Link></li>
            <li><Link to="/second">Second</Link></li>
            <li><Link to="/third">Third</Link></li>
            <li><Link to="/calc">Calculator</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
