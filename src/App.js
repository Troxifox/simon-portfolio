import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Work, WorkTwo, WorkThree } from './pages/Work';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/works/works1" element={<Work />} />
        <Route path="/works/works2" element={<WorkTwo />} />
        <Route path="/works/works3" element={<WorkThree />} />
      </Routes>
    </Router>
  );
}

export default App;
