
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {TrendingUp, Target, Calendar, MessageSquare, Briefcase, Star, Award, Zap, ArrowRight, Clock, CheckCircle, Users, Globe} from 'lucide-react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useAppStore } from '../store/useAppStore'

const Dashboard = () => {
  const { user, assessmentResult, careerPaths, streak } = useAppStore()

  const quickActions = [
    {
      title: 'Explore Career Paths',
      description: 'View your personalized recommendations',
      icon: Target,
      path: '/career-paths',
      gradient: 'from-primary-500 to-primary-700',
      stats: `${careerPaths.length} paths available`
    },
    {
      title: 'View Roadmap',
      description: 'Track your skill development',
      icon: TrendingUp,
      path: '/roadmap',
      gradient: 'from-secondary-500 to-secondary-700',
      stats: '12 skills to unlock'
    },
    {
      title: 'Daily Tasks',
      description: 'Complete today\'s challenges',
      icon: Calendar,
      path: '/daily-tasks',
      gradient: 'from-accent-500 to-accent-700',
      stats: '3 tasks pending'
    },
    {
      title: 'Mock Interview',
      description: 'Practice with AI interviewer',
      icon: MessageSquare,
      path: '/mock-interview',
      gradient: 'from-green-500 to-green-700',
      stats: 'Next: Technical round'
    }
  ]

  const achievements = [
    { title: 'Assessment Complete', icon: CheckCircle, unlocked: true },
    { title: 'First Career Path', icon: Target, unlocked: true },
    { title: '7-Day Streak', icon: Zap, unlocked: streak >= 7 },
    { title: 'Skill Master', icon: Award, unlocked: false },
    { title: 'Interview Ready', icon: MessageSquare, unlocked: false }
  ]

  const recentActivity = [
    { action: 'Completed career assessment', time: '2 hours ago', icon: CheckCircle },
    { action: 'Explored Full Stack Developer path', time: '1 day ago', icon: Target },
    { action: 'Completed daily coding challenge', time: '2 days ago', icon: Zap },
    { action: 'Updated profile information', time: '3 days ago', icon: Users }
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, {user?.name}! 👋
              </h1>
              <p className="text-white/70 text-lg">
                Ready to continue your career journey?
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-white">{streak}</div>
              <div className="text-white/80 text-sm">Day Streak</div>
            </motion.div>
          </div>

          {/* Career Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* Profile Summary */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-6">Your Career Profile</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white/70 text-sm uppercase tracking-wide mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {assessmentResult?.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white/70 text-sm uppercase tracking-wide mb-2">Personality Traits</h3>
                    <div className="flex flex-wrap gap-2">
                      {assessmentResult?.personalityTraits.map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-white/70 text-sm uppercase tracking-wide mb-3">Skill Level</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent-400 to-accent-600 h-2 rounded-full"
                        style={{ 
                          width: assessmentResult?.skillLevel === 'beginner' ? '33%' : 
                                assessmentResult?.skillLevel === 'intermediate' ? '66%' : '100%' 
                        }}
                      />
                    </div>
                    <span className="text-white capitalize">{assessmentResult?.skillLevel}</span>
                  </div>
                </div>
              </div>

              {/* Aptitude Scores */}
              <div>
                <h3 className="text-white/70 text-sm uppercase tracking-wide mb-4">Aptitude Heatmap</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(assessmentResult?.aptitudeScores || {}).map(([skill, score]) => (
                    <div key={skill} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2">
                        <CircularProgressbar
                          value={score}
                          text={`${score}`}
                          styles={buildStyles({
                            textSize: '24px',
                            pathColor: score > 80 ? '#10b981' : score > 60 ? '#f59e0b' : '#ef4444',
                            textColor: '#ffffff',
                            trailColor: 'rgba(255,255,255,0.1)',
                            pathTransitionDuration: 1.5,
                          })}
                        />
                      </div>
                      <div className="text-white/70 text-xs">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <Link key={action.title} to={action.path}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{action.title}</h3>
                    <p className="text-white/70 text-sm mb-3">{action.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/50">{action.stats}</span>
                      <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      achievement.unlocked 
                        ? 'bg-green-500/20 border border-green-500/30' 
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${
                      achievement.unlocked ? 'text-green-400' : 'text-white/40'
                    }`} />
                    <span className={`font-medium ${
                      achievement.unlocked ? 'text-white' : 'text-white/60'
                    }`}>
                      {achievement.title}
                    </span>
                    {achievement.unlocked && (
                      <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-white/50 text-xs mt-1">{activity.time}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
