import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="container text-center justify-content-center align-items-center mt-4 border border-dark-subtle">
        <h2>Authentication System</h2>
        <nav className="mb-3" >
          <Link to="/register" className="btn btn-primary me-2">Register</Link>
          <Link to="/login" className="btn btn-success">Login</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
