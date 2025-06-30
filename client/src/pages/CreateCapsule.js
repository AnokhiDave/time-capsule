// ✅ File: client/src/pages/CreateCapsule.js
import React, { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

const CreateCapsule = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [unlockDate, setUnlockDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await API.post('/capsules', {
        title,
        message,
        unlockDate,
      }, {
        headers: { Authorization: token },
      });
      alert('Capsule created successfully!');
      navigate('/dashboard');
    } catch (err) {
      alert('Failed to create capsule');
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Time Capsule</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <input type="date" value={unlockDate} onChange={(e) => setUnlockDate(e.target.value)} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCapsule;