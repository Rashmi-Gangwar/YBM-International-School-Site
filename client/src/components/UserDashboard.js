import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    motherName: "",
    fatherName: "",
    dob: "",
    studentClass: "",
    rollNumber: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users/user', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUser(res.data);
        setForm({
          motherName: res.data.motherName || "",
          fatherName: res.data.fatherName || "",
          dob: res.data.dob || "",
          studentClass: res.data.studentClass || "",
          rollNumber: res.data.rollNumber || ""
        });
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:5000/api/users/update-profile', form, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Update failed. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return user ? (
    <div className="dashboard-container">
      <div className="profile-card">
        <h2>Welcome, {user.name} 👋</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Pincode:</strong> {user.pincode}</p>
      </div>

      {message && (
        <div className={`alert ${message.includes("success") ? "success" : "error"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="profile-form">
        <input type="text" name="motherName" value={form.motherName} onChange={handleChange} placeholder="Mother's Name" />
        <input type="text" name="fatherName" value={form.fatherName} onChange={handleChange} placeholder="Father's Name" />
        <input type="date" name="dob" value={form.dob} onChange={handleChange} />
        <input type="text" name="studentClass" value={form.studentClass} onChange={handleChange} placeholder="Class" />
        <input type="text" name="rollNumber" value={form.rollNumber} onChange={handleChange} placeholder="Roll Number" />
        <button type="submit">Update Profile</button>
      </form>

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <p className="loading">Loading user info...</p>
  );
};

export default UserDashboard;
