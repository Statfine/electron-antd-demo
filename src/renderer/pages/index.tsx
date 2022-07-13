import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import WelcomePage from './Welcome';
import { DashboardPage } from './Dashboard/Loadable';
import { ListPage } from './Dashboard/List/Loadable';
import { UserPage } from './Dashboard/User/Loadable';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="dashboard" element={<DashboardPage />}>
          <Route index element={<div>欢迎使用</div>} />
          <Route path="user" element={<UserPage />} />
          <Route path="list">
            <Route index element={<ListPage />} />
            <Route path="page1" element={<div>列表页面1</div>} />
            <Route path="page2" element={<div>列表页面2</div>} />
            <Route path="page3" element={<div>列表页面3</div>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
