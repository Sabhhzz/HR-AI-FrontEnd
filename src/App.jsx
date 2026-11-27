import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
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
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/upload" element={<Upload />} />

      {/* HR only */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/ai-screening" element={<ProtectedRoute><AIScreening /></ProtectedRoute>} />
      <Route path="/ranking" element={<ProtectedRoute><Ranking /></ProtectedRoute>} />
      <Route path="/candidates" element={<ProtectedRoute><Candidates /></ProtectedRoute>} />
      <Route path="/candidates/:id" element={<ProtectedRoute><CandidateDetail /></ProtectedRoute>} />
      <Route path="/automation" element={<ProtectedRoute><Automation /></ProtectedRoute>} />
      <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
      <Route path="/data-storage" element={<ProtectedRoute><DataStorage /></ProtectedRoute>} />

      {/* Anything else */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App