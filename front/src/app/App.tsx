import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from '../presentation/pages/register';
import { LoginPage } from '../presentation/pages/login';
import { DashboardPage } from '../presentation/pages/dashboard';
import { FinancialGoalsPage } from '../presentation/pages/financialGoals';
import { AccountCardPage } from '../presentation/pages/accountCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/financial-goals" element={<FinancialGoalsPage />} />
        <Route path='/acount-user' element={<AccountCardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
