import { Route, Routes } from 'react-router-dom';
import EmptyPage from './pages/EmptyPage';
import Home from './pages/Home';
import Project from './pages/Project';
import Schedule from './pages/Schedule';
import Sign from './pages/Sign';
import Study from './pages/Study';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/study" element={<Study />} />
      <Route path="/project" element={<Project />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="*" element={<EmptyPage />} />
    </Routes>
  );
}

export default App;
