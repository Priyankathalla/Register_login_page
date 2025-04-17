import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  // ✅ Use env variable for API
  const API_URL = import.meta.env.VITE_API_URL;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/register`, {
        username,
        email,
        password
      });
       setMsg('Registration successful!');
       setTimeout(() => {
        navigate('/login'); // Navigate after the success message is displayed
      }, 2000);
      // navigate('/login'); // ✅ Go to login page after successful registration
    } catch (err) {
      console.error('Register error:', err.response?.data || err.message);
      setMsg('Registration failed');
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
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
          <label className="col-sm-2 col-form-label">Email :</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

        <button className="btn btn-primary text-center mb-2">Register</button>
        {msg && <div className="alert alert-info mt-3">{msg}</div>}
      </form>
    </div>
  );
}

export default Register;
