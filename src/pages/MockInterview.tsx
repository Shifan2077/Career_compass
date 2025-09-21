
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '../store/useAppStore'
import {Mic, MicOff, Video, VideoOff, Play, Pause, RotateCcw, CheckCircle, Clock, Star, TrendingUp, MessageSquare, Brain, Target, Award} from 'lucide-react'

const MockInterview = () => {
  const { user } = useAppStore()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [interviewStage, setInterviewStage] = useState<'setup' | 'interview' | 'feedback'>('setup')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [micEnabled, setMicEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)

  const interviewRoles = [
    {
      id: 'frontend',
      title: 'Frontend Developer',
      company: 'Tech Startup',
      level: 'Junior',
      duration: '30 min',
      questions: 15,
      color: 'from-blue-500 to-purple-600',
      skills: ['React', 'JavaScript', 'CSS', 'Problem Solving']
    },
    {
      id: 'fullstack',
      title: 'Full Stack Developer',
      company: 'Mid-size Company',
      level: 'Mid-level',
      duration: '45 min',
      questions: 20,
      color: 'from-green-500 to-teal-600',
      skills: ['Node.js', 'React', 'Database', 'System Design']
    },
    {
      id: 'backend',
      title: 'Backend Developer',
      company: 'Enterprise',
      level: 'Senior',
      duration: '60 min',
      questions: 25,
      color: 'from-orange-500 to-red-500',
      skills: ['Python', 'APIs', 'Database', 'Architecture']
    }
  ]

  const sampleQuestions = [
    {
      id: 1,
      type: 'technical',
      question: "Explain the difference between let, const, and var in JavaScript.",
      category: "JavaScript Fundamentals",
      difficulty: "Easy",
      timeLimit: 180
    },
    {
      id: 2,
      type: 'coding',
      question: "Write a function to reverse a string without using built-in methods.",
      category: "Problem Solving",
      difficulty: "Medium",
      timeLimit: 300
    },
    {
      id: 3,
      type: 'behavioral',
      question: "Tell me about a challenging project you worked on and how you overcame obstacles.",
      category: "Behavioral",
      difficulty: "Medium",
      timeLimit: 240
    }
  ]

  const feedbackData = {
    overallScore: 78,
    technicalScore: 82,
    communicationScore: 75,
    problemSolvingScore: 80,
    strengths: [
      "Strong understanding of JavaScript fundamentals",
      "Clear communication and explanation of concepts",
      "Good problem-solving approach"
    ],
    improvements: [
      "Practice more complex algorithmic problems",
      "Work on explaining trade-offs between solutions",
      "Improve time management during coding challenges"
    ],
    detailedFeedback: [
      {
        question: "JavaScript fundamentals",
        score: 85,
        feedback: "Excellent explanation of variable declarations. You clearly understood the scope differences."
      },
      {
        question: "String reversal function",
        score: 75,
        feedback: "Good solution, but consider discussing time complexity and alternative approaches."
      },
      {
        question: "Behavioral question",
        score: 80,
        feedback: "Great storytelling structure. Could provide more specific metrics about the impact."
      }
    ]
  }

  const startInterview = () => {
    setInterviewStage('interview')
    setCurrentQuestion(0)
  }

  const nextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setInterviewStage('feedback')
    }
  }

  const restartInterview = () => {
    setInterviewStage('setup')
    setSelectedRole(null)
    setCurrentQuestion(0)
    setIsRecording(false)
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Mock Interview
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Practice with AI-powered interviews tailored to your target role
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {interviewStage === 'setup' && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {interviewRoles.map((role) => (
                  <motion.div
                    key={role.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedRole === role.id
                        ? 'border-primary-400 bg-primary-500/10'
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${role.color} mb-4 flex items-center justify-center`}>
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                    <p className="text-slate-400 mb-4">{role.company} • {role.level}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-300">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {role.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {role.questions} questions
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {selectedRole && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <button
                    onClick={startInterview}
                    className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    <Play className="w-5 h-5" />
                    Start Interview
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {interviewStage === 'interview' && (
            <motion.div
              key="interview"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-400">
                      Question {currentQuestion + 1} of {sampleQuestions.length}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="w-4 h-4" />
                      {Math.floor(sampleQuestions[currentQuestion]?.timeLimit / 60)}:
                      {String(sampleQuestions[currentQuestion]?.timeLimit % 60).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setMicEnabled(!micEnabled)}
                      className={`p-2 rounded-lg transition-colors ${
                        micEnabled ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}
                    >
                      {micEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setVideoEnabled(!videoEnabled)}
                      className={`p-2 rounded-lg transition-colors ${
                        videoEnabled ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}
                    >
                      {videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      sampleQuestions[currentQuestion]?.difficulty === 'Easy' 
                        ? 'bg-green-500/20 text-green-400'
                        : sampleQuestions[currentQuestion]?.difficulty === 'Medium'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {sampleQuestions[currentQuestion]?.difficulty}
                    </span>
                    <span className="text-sm text-slate-400">
                      {sampleQuestions[currentQuestion]?.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {sampleQuestions[currentQuestion]?.question}
                  </h2>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isRecording 
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-primary-500 text-white hover:bg-primary-600'
                    }`}
                  >
                    {isRecording ? (
                      <>
                        <Pause className="w-5 h-5" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        Start Recording
                      </>
                    )}
                  </button>

                  <button
                    onClick={nextQuestion}
                    className="px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-colors"
                  >
                    {currentQuestion < sampleQuestions.length - 1 ? 'Next Question' : 'Finish Interview'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {interviewStage === 'feedback' && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">Interview Complete!</h2>
                  <p className="text-slate-400">Here's your detailed performance analysis</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  {[
                    { label: 'Overall Score', score: feedbackData.overallScore, icon: Star },
                    { label: 'Technical', score: feedbackData.technicalScore, icon: Brain },
                    { label: 'Communication', score: feedbackData.communicationScore, icon: MessageSquare },
                    { label: 'Problem Solving', score: feedbackData.problemSolvingScore, icon: Target }
                  ].map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <metric.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{metric.score}%</div>
                      <div className="text-sm text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Strengths
                    </h3>
                    <div className="space-y-3">
                      {feedbackData.strengths.map((strength, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-yellow-400" />
                      Areas for Improvement
                    </h3>
                    <div className="space-y-3">
                      {feedbackData.improvements.map((improvement, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold text-white">Detailed Question Feedback</h3>
                  {feedbackData.detailedFeedback.map((item, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{item.question}</h4>
                        <span className="text-primary-400 font-bold">{item.score}%</span>
                      </div>
                      <p className="text-slate-300 text-sm">{item.feedback}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={restartInterview}
                    className="px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-colors flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Try Again
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl hover:from-primary-600 hover:to-purple-700 transition-all duration-300">
                    Download Report
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MockInterview
