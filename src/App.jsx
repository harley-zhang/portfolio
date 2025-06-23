import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';

function Pdf() {
  return (
    <iframe
      src="/sagebrush.pdf"
      title="sagebrush"
      style={{ width: '100%', height: '100vh', border: 'none' }}
    />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sagebrush.pdf" element={<Pdf />} />
      </Routes>
    </Router>
  );
}

export default App;
