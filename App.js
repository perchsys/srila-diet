import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Adminlogin from './components/Adminlogin';
import Diabeteslogin from './components/Diabeteslogin';
import Hypertensionlogin from './components/Hypertensionlogin';
import Obesitylogin from './components/Obesitylogin';
import Pcoslogin from './components/Pcoslogin';
import Pregnantlogin from './components/Pregnantlogin';
import Admin from './components/Admin';
import Diabetes from './components/Diabetes';
import Hypertension from './components/Hypertension';
import Obesity from './components/Obesity';
import Pcos from './components/Pcos';
import Pregnant from './components/Pregnant';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
import Wats from './components/Wats';
function App() {
  return (
    <Router>
 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/diabeteslogin" element={<Diabeteslogin />} />
          <Route path="/hypertensionlogin" element={<Hypertensionlogin />} />
          <Route path="/obesitylogin" element={<Obesitylogin />} />
          <Route path="/pcoslogin" element={<Pcoslogin />} />
          <Route path="/pregnantlogin" element={<Pregnantlogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/hypertension" element={<Hypertension />} />
          <Route path="/obesity" element={<Obesity />} />
          <Route path="/pcos" element={<Pcos />} />
          <Route path="/pregnancy" element={<Pregnant />} />
          <Route path="/EditableRow" element={<EditableRow />} />
          <Route path="/ReadOnlyRow" element={<ReadOnlyRow />} />
          <Route path="/watsapp" element={<Wats />} />
          </Routes>
    
      </Router>
  );
}

export default App;
