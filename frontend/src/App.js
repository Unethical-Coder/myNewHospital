import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateHospital from './pages/CreateHospital';
import HospitalDetailsPage from './pages/HospitalDetailsPage';
import EditHospitalPage from './pages/EditHospitalPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Hospital Management System</h1>
          <nav>
            <Link to="/" className="btn">Home</Link>
            {/* <Link to="/create" className="btn btn-secondary">Add New Hospital</Link> */}
          </nav>
        </header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateHospital />} />
            <Route path="/hospital/:id" element={<HospitalDetailsPage />} />
            <Route path="/edit/:id" element={<EditHospitalPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Hospital Management System. All rights reserved. Created by Anurag Kumar (Unethical-Coder)</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;