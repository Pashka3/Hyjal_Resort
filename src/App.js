import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Contact from './pages/Contact';

import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rooms/" element={<Rooms />} />
        <Route path="/Rooms/:slug" element={<SingleRoom />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
