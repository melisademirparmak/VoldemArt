import { Routes, Route } from 'react-router-dom';
import '../src/global.css';
import Wallet from './views/Wallet';
import Home from './views/Home';
import Profile from './views/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/walletAdress" element={<Wallet />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
