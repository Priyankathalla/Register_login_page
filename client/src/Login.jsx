import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  // ✅ Use environment variable for API base URL
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/login`, { username, password });

      localStorage.setItem('token', res.data.token);
      setMsg('Login successful!');
      setTimeout(() => {
        navigate('/dashboard'); // Navigate after the success message is displayed
      }, 2000);
      // navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setMsg('Login failed');
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row text-center">
          <label className="col-sm-2 col-form-label">Username :</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row text-center">
          <label className="col-sm-2 col-form-label">Password :</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="btn btn-success text-center mb-2">Login</button>
        {msg && <div className="alert alert-info mt-3">{msg}</div>}
      </form>
    </div>
  );
}

export default Login;
