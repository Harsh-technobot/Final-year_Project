import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landingpage/LandingPage';
import LoginForm from './pages/Landingpage/components/LoginForm';
import SignupForm from './pages/Landingpage/components/SignupForm';
import GrievancesHomepage from './pages/grievances/Grievanceshomepage';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import MainScreen from './pages/MainScreen';
import ProfessionalDetailPage from './pages/JobPortal/components/ProfessionalDetail';

function App() { 
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/professional/:id" element={<ProfessionalDetailPage />} />
          <Route path="/home" element={<MainScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
