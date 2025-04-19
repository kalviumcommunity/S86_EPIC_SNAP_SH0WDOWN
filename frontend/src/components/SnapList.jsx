import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const SnapList = ({ reloadFlag }) => {
  const [snaps, setSnaps] = useState([]);

  useEffect(() => {
    const fetchSnaps = async () => {
      const res = await axios.get('http://localhost:5000/api/snaps');
      setSnaps(res.data);
    };
    fetchSnaps();
  }, [reloadFlag]);

  const handleVote = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/snaps/${id}/vote`);
      const res = await axios.get('http://localhost:5000/api/snaps');
      setSnaps(res.data);
    } catch (err) {
      console.error('Voting error:', err);
    }
  };

  return (
    <div className="snap-list">
      <h2>All Snaps</h2>
      {snaps.map((snap) => (
        <div key={snap._id} className="snap">
          <div className="snap-header">
            <img src={snap.user.avatarUrl} alt="avatar" className="avatar" />
            <strong>@{snap.user.username}</strong>
          </div>
          <img src={snap.imageUrl} alt="snap" className="snap-img" />
          <p>{snap.caption}</p>
          <p>👍 Votes: {snap.votes}</p>
          <button onClick={() => handleVote(snap._id)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default SnapList;
