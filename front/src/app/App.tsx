import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from '../presentation/pages/register/RegisterPage';
import { LoginPage } from '../presentation/pages//login/LoginPage';
import { DashboardPage } from '../presentation/pages/dashboard/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
