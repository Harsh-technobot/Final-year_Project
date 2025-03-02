import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landingpage/LandingPage';
import LoginForm from './pages/Landingpage/components/LoginForm';
import SignupForm from './pages/Landingpage/components/SignupForm';
import GrievancesHomepage from './pages/grievances/Grievanceshomepage';
import './App.css';

function App() { 
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/grievances" element={<GrievancesHomepage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
