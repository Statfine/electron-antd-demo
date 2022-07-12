import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import WelcomePage from './Welcome';
import DashboardPage from './Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}
