import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AIScreening from './pages/AIScreening'
import Ranking from './pages/Ranking'
import Candidates from './pages/Candidates'
import CandidateDetail from './pages/CandidateDetail'
import Automation from './pages/Automation'
import Reports from './pages/Reports'
import DataStorage from './pages/DataStorage'
import Upload from './pages/Upload'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ai-screening" element={<AIScreening />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/candidates" element={<Candidates />} />
      <Route path="/candidates/:id" element={<CandidateDetail />} />
      <Route path="/automation" element={<Automation />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/data-storage" element={<DataStorage />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  )
}

export default App