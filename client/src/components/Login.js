import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', form);
      localStorage.setItem('token', res.data.token);
      res.data.user.role === 'admin' ? navigate('/admin') : navigate('/dashboard');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
