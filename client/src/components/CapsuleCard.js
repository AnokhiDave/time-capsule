import React from 'react';
import { Link } from 'react-router-dom';

function CapsuleCard({ capsule }) {
  const isUnlocked = new Date(capsule.unlockDate) <= new Date();

  return (
    <div className="capsule-card">
      <h3>{capsule.title}</h3>
      <p>{isUnlocked ? '🎉 Unlocked' : '🔒 Locked until: ' + new Date(capsule.unlockDate).toLocaleDateString()}</p>
      <Link to={`/capsule/${capsule._id}`}>View Capsule</Link>
    </div>
  );
}

export default CapsuleCard;
