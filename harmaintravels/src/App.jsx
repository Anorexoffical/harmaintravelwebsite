import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import ContactUs from './Contactus.jsx';
import Aboutus from './Aboutus.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<Aboutus />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
