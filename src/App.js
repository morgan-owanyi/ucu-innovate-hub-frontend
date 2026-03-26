import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SubmitInnovation from './pages/SubmitInnovation';
import Login from './pages/Login';
import LecturerDashboard from './pages/LecturerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitInnovation />} />
<Route path="/login" element={<Login />} />
<Route path="/lecturer-dashboard" element={<ProtectedRoute roleRequired="lecturer">
  <LecturerDashboard />
</ProtectedRoute>} />
<Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
} 

export default App;

