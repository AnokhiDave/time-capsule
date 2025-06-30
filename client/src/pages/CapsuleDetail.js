import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/api';

function CapsuleDetail() {
  const { id } = useParams();
  const [capsule, setCapsule] = useState(null);
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    const fetchCapsule = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await API.get(`/capsules/${id}`, {
          headers: { Authorization: token },
        });

        const capsuleData = res.data;
        setCapsule(capsuleData);

        const today = new Date();
        const unlock = new Date(capsuleData.unlockDate);

        // Fix timezone issues by comparing ISO strings
        setLocked(today.toISOString() < unlock.toISOString());
      } catch (err) {
        console.error('❌ Failed to fetch capsule:', err);
      }
    };

    fetchCapsule();
  }, [id]);

  if (!capsule) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem', color: '#fff', background: '#121212' }}>
      <h2>📦 Capsule: {capsule.title}</h2>
      <p><strong>Created At:</strong> {new Date(capsule.createdAt).toLocaleString()}</p>
      <p><strong>Unlock Date:</strong> {new Date(capsule.unlockDate).toLocaleString()}</p>

      {locked ? (
        <p style={{ color: 'orange' }}>🔒 This capsule is locked. Come back on the unlock date!</p>
      ) : (
        <div>
          <h3>📩 Message:</h3>
          <p style={{ background: '#222', padding: '1rem', borderRadius: '8px' }}>{capsule.message}</p>
        </div>
      )}
    </div>
  );
}

export default CapsuleDetail;
