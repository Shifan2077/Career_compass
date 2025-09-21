
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {ArrowRight, ArrowLeft, CheckCircle, Brain, Target, Lightbulb, Globe, Star} from 'lucide-react'
import { useAppStore } from '../store/useAppStore'
import { useNavigate } from 'react-router-dom'

interface Option {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [isCompleting, setIsCompleting] = useState(false)
  const { setAssessmentResult, setCareerPaths } = useAppStore()
  const navigate = useNavigate()

  const questions: Array<{
    id: string;
    title: string;
    subtitle: string;
    type: string;
    icon: any;
    options: Option[];
  }> = [
    {
      id: 'interests',
      title: 'What excites you most?',
      subtitle: 'Select all that apply',
      type: 'multiple',
      icon: Star,
      options: [
        { id: 'technology', label: 'Technology & Innovation', icon: '💻' },
        { id: 'creativity', label: 'Creative Arts & Design', icon: '🎨' },
        { id: 'business', label: 'Business & Entrepreneurship', icon: '💼' },
        { id: 'science', label: 'Science & Research', icon: '🔬' },
        { id: 'social', label: 'Social Impact & Helping Others', icon: '🤝' },
        { id: 'finance', label: 'Finance & Analytics', icon: '📊' }
      ]
    },
    {
      id: 'skillLevel',
      title: 'How would you rate your current skill level?',
      subtitle: 'Be honest - this helps us personalize your journey',
      type: 'single',
      icon: Target,
      options: [
        { id: 'beginner', label: 'Beginner', description: 'Just starting out, eager to learn' },
        { id: 'intermediate', label: 'Intermediate', description: 'Some experience, ready to advance' },
        { id: 'advanced', label: 'Advanced', description: 'Experienced, looking to specialize' }
      ]
    },
    {
      id: 'learningStyle',
      title: 'How do you learn best?',
      subtitle: 'Select your preferred learning methods',
      type: 'multiple',
      icon: Lightbulb,
      options: [
        { id: 'hands-on', label: 'Hands-on Projects', icon: '🛠️' },
        { id: 'theory', label: 'Theory & Concepts', icon: '📚' },
        { id: 'visual', label: 'Visual Learning', icon: '👁️' },
        { id: 'collaborative', label: 'Group Learning', icon: '👥' },
        { id: 'self-paced', label: 'Self-paced Study', icon: '⏰' }
      ]
    },
    {
      id: 'careerGoals',
      title: 'What are your career aspirations?',
      subtitle: 'Think about your 5-year vision',
      type: 'multiple',
      icon: Globe,
      options: [
        { id: 'leadership', label: 'Leadership & Management', icon: '👑' },
        { id: 'technical', label: 'Technical Expertise', icon: '⚙️' },
        { id: 'entrepreneurship', label: 'Start My Own Business', icon: '🚀' },
        { id: 'remote', label: 'Remote/Flexible Work', icon: '🌍' },
        { id: 'impact', label: 'Make Social Impact', icon: '💝' },
        { id: 'financial', label: 'Financial Success', icon: '💰' }
      ]
    },
    {
      id: 'workEnvironment',
      title: 'What work environment suits you?',
      subtitle: 'Choose your ideal setting',
      type: 'single',
      icon: Brain,
      options: [
        { id: 'startup', label: 'Fast-paced Startup', description: 'Dynamic, innovative, high-growth' },
        { id: 'corporate', label: 'Established Corporation', description: 'Structured, stable, resources' },
        { id: 'freelance', label: 'Freelance/Consulting', description: 'Independent, flexible, varied' },
        { id: 'nonprofit', label: 'Non-profit Organization', description: 'Mission-driven, social impact' }
      ]
    }
  ]

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeAssessment()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const completeAssessment = async () => {
    setIsCompleting(true)
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate assessment result
    const result = {
      interests: answers.interests || [],
      skillLevel: answers.skillLevel || 'beginner',
      learningStyle: answers.learningStyle || [],
      careerGoals: answers.careerGoals || [],
      personalityTraits: generatePersonalityTraits(answers),
      aptitudeScores: generateAptitudeScores(answers)
    }
    
    // Generate career paths
    const careerPaths = generateCareerPaths(result)
    
    setAssessmentResult(result)
    setCareerPaths(careerPaths)
    
    navigate('/dashboard')
  }

  const generatePersonalityTraits = (answers: Record<string, any>) => {
    const traits = []
    if (answers.interests?.includes('technology')) traits.push('Analytical')
    if (answers.interests?.includes('creativity')) traits.push('Creative')
    if (answers.interests?.includes('business')) traits.push('Entrepreneurial')
    if (answers.learningStyle?.includes('collaborative')) traits.push('Team Player')
    if (answers.careerGoals?.includes('leadership')) traits.push('Natural Leader')
    return traits
  }

  const generateAptitudeScores = (answers: Record<string, any>) => {
    return {
      'Technical Skills': Math.floor(Math.random() * 40) + 60,
      'Problem Solving': Math.floor(Math.random() * 30) + 70,
      'Communication': Math.floor(Math.random() * 35) + 65,
      'Leadership': Math.floor(Math.random() * 40) + 60,
      'Creativity': Math.floor(Math.random() * 45) + 55,
      'Analytics': Math.floor(Math.random() * 35) + 65
    }
  }

  const generateCareerPaths = (result: any) => {
    // This would be AI-generated in a real app
    return [
      {
        id: '1',
        title: 'Full Stack Developer',
        description: 'Build end-to-end web applications using modern technologies',
        demandTrend: 85,
        salaryRange: {
          india: { min: 600000, max: 2500000 },
          global: { min: 70000, max: 150000 }
        },
        matchPercentage: 92,
        skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB'],
        whySuitable: 'Your technical interests and problem-solving skills make you perfect for full-stack development'
      },
      {
        id: '2',
        title: 'Product Manager',
        description: 'Lead product strategy and cross-functional teams to build amazing products',
        demandTrend: 78,
        salaryRange: {
          india: { min: 800000, max: 3500000 },
          global: { min: 90000, max: 200000 }
        },
        matchPercentage: 87,
        skills: ['Product Strategy', 'Analytics', 'Leadership', 'Design Thinking'],
        whySuitable: 'Your leadership aspirations and business acumen align perfectly with product management'
      },
      {
        id: '3',
        title: 'Data Scientist',
        description: 'Extract insights from data to drive business decisions',
        demandTrend: 91,
        salaryRange: {
          india: { min: 700000, max: 3000000 },
          global: { min: 80000, max: 180000 }
        },
        matchPercentage: 83,
        skills: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Tableau'],
        whySuitable: 'Your analytical mindset and interest in technology make data science an excellent fit'
      }
    ]
  }

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100
  const isAnswered = answers[currentQuestion?.id]

  if (isCompleting) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <Brain className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-4">Analyzing Your Profile...</h2>
          <p className="text-white/70 text-lg">Our AI is crafting your personalized career roadmap</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white/70">Question {currentStep + 1} of {questions.length}</span>
            <span className="text-white/70">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
          >
            {/* Question Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              >
                <currentQuestion.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {currentQuestion.title}
              </h1>
              <p className="text-white/70 text-lg">{currentQuestion.subtitle}</p>
            </div>

            {/* Options */}
            <div className={`grid gap-4 mb-12 ${
              currentQuestion.type === 'single' ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'
            }`}>
              {currentQuestion.options.map((option, index) => {
                const isSelected = currentQuestion.type === 'multiple' 
                  ? answers[currentQuestion.id]?.includes(option.id)
                  : answers[currentQuestion.id] === option.id

                return (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (currentQuestion.type === 'multiple') {
                        const current = answers[currentQuestion.id] || []
                        const updated = current.includes(option.id)
                          ? current.filter((id: string) => id !== option.id)
                          : [...current, option.id]
                        handleAnswer(currentQuestion.id, updated)
                      } else {
                        handleAnswer(currentQuestion.id, option.id)
                      }
                    }}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? 'border-primary-500 bg-primary-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      {option.icon && (
                        <span className="text-2xl">{option.icon}</span>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-semibold text-lg">{option.label}</h3>
                          {isSelected && <CheckCircle className="w-5 h-5 text-primary-400" />}
                        </div>
                        {option.description && (
                          <p className="text-white/70">{option.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-200 ${
                  currentStep === 0
                    ? 'text-white/40 cursor-not-allowed'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Previous</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={!isAnswered}
                className={`px-8 py-3 rounded-xl flex items-center space-x-2 font-semibold transition-all duration-200 ${
                  isAnswered
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-glow'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                <span>{currentStep === questions.length - 1 ? 'Complete Assessment' : 'Next'}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Assessment
