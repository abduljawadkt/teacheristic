import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GTFPPage from './pages/GTFPPage';
import MLTeacherProfilePage from './pages/MLTeacherProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gtfp" element={<GTFPPage />} />
      <Route path="/profile" element={<MLTeacherProfilePage />} />
    </Routes>
  );
}

export default App;
