
import React from 'react'
import { motion } from 'framer-motion'
import {ArrowRight, Brain, Target, TrendingUp, Users, Star, CheckCircle, Sparkles, Zap, Globe} from 'lucide-react'
import { useAppStore } from '../store/useAppStore'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const { setUser } = useAppStore()
  const navigate = useNavigate()

  const handleGetStarted = () => {
    // Simulate user login - in real app, this would be proper authentication
    setUser({
      id: '1',
      name: 'Alex Johnson',
      email: 'alex@example.com'
    })
    navigate('/assessment')
  }

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Assessment',
      description: 'Smart quiz that analyzes your interests, skills, and personality to create your unique career profile.',
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      icon: Target,
      title: 'Personalized Career Paths',
      description: 'Get 3 tailored career recommendations with market demand, salary insights, and growth potential.',
      gradient: 'from-secondary-400 to-secondary-600'
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Skill Roadmap',
      description: 'Visual skill tree with gamified progression tracking and milestone achievements.',
      gradient: 'from-accent-400 to-accent-600'
    },
    {
      icon: Zap,
      title: 'Daily Practice Tasks',
      description: 'AI-generated daily challenges, resources, and micro-learning to keep you engaged.',
      gradient: 'from-green-400 to-green-600'
    }
  ]

  const stats = [
    { number: '50K+', label: 'Students Guided', icon: Users },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '200+', label: 'Career Paths', icon: Target },
    { number: '4.9/5', label: 'User Rating', icon: Star }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Google',
      content: 'Career Compass AI helped me transition from mechanical engineering to tech. The roadmap was spot-on!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Rahul Patel',
      role: 'Data Scientist at Microsoft',
      content: 'The mock interviews and daily practice made all the difference. Landed my dream job in 6 months!',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Ananya Gupta',
      role: 'Product Manager at Flipkart',
      content: 'From confused graduate to confident PM. The personalized guidance was exactly what I needed.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-secondary-900/20 to-accent-900/20" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-accent-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-accent-400 mr-2" />
                <span className="text-sm text-white/90 font-medium">AI-Powered Career Guidance</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Your Career
                <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                  {' '}Compass{' '}
                </span>
                Awaits
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Discover your perfect career path with AI-powered assessments, personalized roadmaps, 
                and real-world practice that gets you hired.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-lg font-semibold rounded-xl flex items-center space-x-2 shadow-premium hover:shadow-glow transition-all duration-300"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-3">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-white/70">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Why Choose Career Compass AI?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with proven career guidance 
              to accelerate your professional growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join thousands of professionals who transformed their careers with Career Compass AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">"{testimonial.content}"</p>
                <div className="flex text-accent-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join Career Compass AI today and take the first step towards your dream career. 
              Your future self will thank you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="px-10 py-5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xl font-semibold rounded-xl flex items-center space-x-3 mx-auto shadow-premium hover:shadow-glow transition-all duration-300"
            >
              <span>Start Free Assessment</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
