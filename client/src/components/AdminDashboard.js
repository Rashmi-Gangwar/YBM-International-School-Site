import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({});
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const fetchUsers = async () => {
    const { data } = await axios.get("/api/users/admin", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/users/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setConfirmDeleteId(null);
    fetchUsers();
  };

  const handleEditClick = (user) => {
    setEditingUser(user._id);
    setForm(user);
  };

  const handleUpdate = async () => {
    await axios.put(`/api/users/${editingUser}`, form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setEditingUser(null);
    fetchUsers();
  };

  return (
    <div className="admin-dashboard">
      <h1>All Registered Users</h1>
      <div className="card-grid">
        {users.map((user) => (
          <div className="user-card" key={user._id}>
            {editingUser === user._id ? (
              <>
                <input value={form.name || ''} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input value={form.email || ''} onChange={e => setForm({ ...form, email: e.target.value })} />
                <input value={form.phone || ''} onChange={e => setForm({ ...form, phone: e.target.value })} />
                <input value={form.pincode || ''} onChange={e => setForm({ ...form, pincode: e.target.value })} />
                <input value={form.motherName || ''} onChange={e => setForm({ ...form, motherName: e.target.value })} />
                <input value={form.fatherName || ''} onChange={e => setForm({ ...form, fatherName: e.target.value })} />
                <input value={form.dob || ''} onChange={e => setForm({ ...form, dob: e.target.value })} />
                <input value={form.studentClass || ''} onChange={e => setForm({ ...form, studentClass: e.target.value })} />
                <input value={form.rollNumber || ''} onChange={e => setForm({ ...form, rollNumber: e.target.value })} />
                <button onClick={handleUpdate}>Save</button>
                <button onClick={() => setEditingUser(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h2>{user.name}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Pincode:</strong> {user.pincode}</p>
                <p><strong>Mother's Name:</strong> {user.motherName || "N/A"}</p>
                <p><strong>Father's Name:</strong> {user.fatherName || "N/A"}</p>
                <p><strong>DOB:</strong> {user.dob || "N/A"}</p>
                <p><strong>Class:</strong> {user.studentClass || "N/A"}</p>
                <p><strong>Roll No:</strong> {user.rollNumber || "N/A"}</p>
                <div className="button-group">
                  <button onClick={() => handleEditClick(user)}>Edit</button>
                  <button className="delete-btn" onClick={() => setConfirmDeleteId(user._id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {confirmDeleteId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to delete this user?</h3>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={() => handleDelete(confirmDeleteId)}>
                Yes, Delete
              </button>
              <button className="cancel-btn" onClick={() => setConfirmDeleteId(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
