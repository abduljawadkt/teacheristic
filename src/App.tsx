import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GTFPPage from './pages/GTFPPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gtfp" element={<GTFPPage />} />
    </Routes>
  );
}

export default App;
