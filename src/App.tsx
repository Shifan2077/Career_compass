
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

// Pages
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Assessment from './pages/Assessment'
import CareerPaths from './pages/CareerPaths'
import Roadmap from './pages/Roadmap'
import DailyTasks from './pages/DailyTasks'
import MockInterview from './pages/MockInterview'
import Portfolio from './pages/Portfolio'

// Components
import Navbar from './components/Navbar'
import { useAppStore } from './store/useAppStore'

function App() {
  const { user, isAssessmentCompleted } = useAppStore()

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/assessment" 
              element={
                user ? <Assessment /> : <Navigate to="/" replace />
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                user && isAssessmentCompleted ? (
                  <Dashboard />
                ) : user ? (
                  <Navigate to="/assessment" replace />
                ) : (
                  <Navigate to="/" replace />
                )
              } 
            />
            <Route 
              path="/career-paths" 
              element={
                user && isAssessmentCompleted ? (
                  <CareerPaths />
                ) : (
                  <Navigate to="/dashboard" replace />
                )
              } 
            />
            <Route 
              path="/roadmap" 
              element={
                user && isAssessmentCompleted ? (
                  <Roadmap />
                ) : (
                  <Navigate to="/dashboard" replace />
                )
              } 
            />
            <Route 
              path="/daily-tasks" 
              element={
                user && isAssessmentCompleted ? (
                  <DailyTasks />
                ) : (
                  <Navigate to="/dashboard" replace />
                )
              } 
            />
            <Route 
              path="/mock-interview" 
              element={
                user && isAssessmentCompleted ? (
                  <MockInterview />
                ) : (
                  <Navigate to="/dashboard" replace />
                )
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                user && isAssessmentCompleted ? (
                  <Portfolio />
                ) : (
                  <Navigate to="/dashboard" replace />
                )
              } 
            />
          </Routes>
        </AnimatePresence>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#f1f5f9',
              border: '1px solid #334155',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App
