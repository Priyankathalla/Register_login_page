import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', { username, password });

      localStorage.setItem('token', res.data.token);  // ✅ only after login succeeds
      setMsg('Login successful!');
      navigate('/dashboard');  // ✅ navigate after login
    } catch (err) {
      setMsg('Login failed');
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row text-center" >
          <label className="col-sm-2 col-form-label">Username :</label>
            <div className="col-sm-10">
            <input className="form-control" onChange={(e) => setUsername(e.target.value)} />
            </div>
        </div>
        <div className="mb-3 row text-center">
          <label className="col-sm-2 col-form-label">Password :</label>
          <div className="col-sm-10">
           <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
          </div>

        </div>
        <button className="btn btn-success text-center mb-2">Login</button>
        {msg && <div className="alert alert-info mt-3">{msg}</div>}
      </form>
    </div>
  );
}

export default Login;
