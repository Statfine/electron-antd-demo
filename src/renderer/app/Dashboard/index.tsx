/**
 * Dashboard
 */
import { useNavigate } from 'react-router-dom';

import { memo } from 'react';

const Dashboard = memo(() => {
  const navigate = useNavigate();

  const handleJump = () => navigate(-1);
  return (
    <>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleJump}>
        back
      </button>
    </>
  );
});

export default Dashboard;
