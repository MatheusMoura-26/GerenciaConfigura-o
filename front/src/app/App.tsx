import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from '../presentation/pages/RegisterPage';
import { LoginPage } from '../presentation/pages/LoginPage';
import { DashboardPage } from '../presentation/pages/DashboardPage';

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
