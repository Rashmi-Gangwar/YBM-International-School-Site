import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', pincode: '', agreedToTerms: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agreedToTerms) {
      alert("You must agree to the terms");
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/users/register', form);
      alert('Registered successfully');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input name="name" placeholder="Name" className="input-field" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" className="input-field" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="input-field" required onChange={handleChange} />
        <input name="phone" placeholder="Phone" className="input-field" required onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" className="input-field" required onChange={handleChange} />

        <label className="checkbox-label">
          <input type="checkbox" name="agreedToTerms" onChange={handleChange} />
          <span>I have read all the terms & privacy policy.</span>
        </label>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <p style={{ marginTop: '5px' }}>
        Already have an account?{' '}
        <span
          onClick={() => navigate('/login')}
          style={{ color: '#e77a00', cursor: 'pointer', textDecoration: 'none' }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
