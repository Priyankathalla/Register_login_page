import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode }from 'jwt-decode';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error('Invalid token');
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="mt-4" text-center>
      <h3>Dashboard</h3>
      {user && (
        <>
          <p>Welcome, <strong>{user.username}</strong>! 🎉</p>
          <button onClick={logout} className="btn btn-danger mb-3">Logout</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
