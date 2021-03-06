import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Home';
import WelcomePage from './Welcome';
import { DashboardPage } from './Dashboard/Loadable';
import { ListPage } from './Dashboard/List/Loadable';
import { UserPage } from './Dashboard/User/Loadable';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />}>
          <Route index element={<WelcomePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="list">
            <Route index element={<ListPage />} />
            <Route path="page1" element={<div>列表页面1</div>} />
            <Route path="page2" element={<ListPage />} />
            <Route path="page3" element={<div>列表页面3</div>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
