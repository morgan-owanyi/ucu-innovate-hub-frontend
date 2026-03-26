import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://your-backend.onrender.com/api/register/',
        { email, password, role }
      );

      // Save token & role
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.user.role);

      // Redirect based on role
      if (response.data.user.role === 'lecturer') {
        navigate('/lecturer-dashboard');
      } else {
        navigate('/');
      }

    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="card p-4 shadow-sm" style={{ width: '400px' }}>
          <h3 className="text-center mb-3">Register</h3>

          <form onSubmit={handleRegister}>
            <input
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="form-control mb-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <select
              className="form-control mb-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
            </select>

            <button className="btn btn-primary w-100">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;