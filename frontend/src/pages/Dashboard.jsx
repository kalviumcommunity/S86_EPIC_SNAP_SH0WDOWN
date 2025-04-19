import React, { useState } from 'react';
import UploadForm from '../components/UploadForm';
import SnapList from '../components/SnapList';
import '../App.css';

const Dashboard = () => {
  const [reload, setReload] = useState(false);

  const handleUpload = () => setReload(!reload);

  return (
    <div className="dashboard">
      <h1>📸 Snap Dashboard</h1>
      <div className="dashboard-content">
        <div className="upload-section">
          <h2 className='uploadSnap'>Upload a Snap</h2>
          <UploadForm onUpload={handleUpload} />
        </div>
        <div className="snaplist-section">
          <SnapList reloadFlag={reload} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
