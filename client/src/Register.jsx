import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { username, password });
      setMsg('Registered successfully!');
    } catch (err) {
      setMsg('Registration failed');
    }
  };

  return (
    // <div>
    //   <h3>Register</h3>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3  text-center">
    //       <label>Username</label>
    //       <input className="form-control" onChange={(e) => setUsername(e.target.value)} />
    //     </div>
    //     <div className="mb-3 text-center">
    //       <label>Password</label>
    //       <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
    //     </div>
    //     <button className="btn btn-primary" text-center>Register</button>
    //     {msg && <div className="alert alert-info mt-2">{msg}</div>}
    //   </form>
    // </div>

<div>
<h3>Register</h3>
<form onSubmit={handleSubmit}>
<div className="mb-3 row text-center">
<label for="Username" className="col-sm-2 col-form-label">Username :</label>
<div className="col-sm-10">
  <input  class="form-control"  onChange={(e) => setUsername(e.target.value)}/>
</div>
</div>
<div class="mb-3 row text-center">
<label for="inputPassword" class="col-sm-2 col-form-label" >Password :</label>
<div class="col-sm-10">
  <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)}/>
</div>
</div>
<button className="btn btn-primary mb-3" >Register</button>
     {msg && <div className="alert alert-info mt-2">{msg}</div>}
     </form>
</div>
);
}

export default Register;
