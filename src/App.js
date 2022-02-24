import Home from './pages/Home';
import Login from './pages/Login';
import  ErrorPage from './pages/ErrorPage'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

  );
}

export default App;
