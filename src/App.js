import { Routes, Route } from 'react-router';

import Home from './components/Home';

import './App.css';
import Contact from './routes/Contact';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default App;
