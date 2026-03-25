import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import axios from 'axios';
import Footer from '../components/Footer.js';

function Login() {
  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="card p-4 shadow-sm" style={{ width: '350px' }}>
          <h3 className="text-center mb-3">Login</h3>

          <input className="form-control mb-3" placeholder="Email" />
          <input className="form-control mb-3" type="password" placeholder="Password" />

          <button className="btn btn-primary w-100">Login</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
