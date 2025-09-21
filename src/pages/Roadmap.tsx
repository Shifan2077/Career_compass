
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '../store/useAppStore'
import {CheckCircle, Circle, Star, Trophy, Target, Book, Code, Zap, Lock, Play} from 'lucide-react'

const Roadmap = () => {
  const { user } = useAppStore()
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const skillTree = {
    "Core Foundation": {
      level: 1,
      skills: [
        { name: "Programming Basics", progress: 100, unlocked: true, completed: true },
        { name: "Data Structures", progress: 85, unlocked: true, completed: false },
        { name: "Algorithms", progress: 60, unlocked: true, completed: false },
        { name: "Problem Solving", progress: 75, unlocked: true, completed: false }
      ]
    },
    "Web Development": {
      level: 2,
      skills: [
        { name: "HTML/CSS", progress: 90, unlocked: true, completed: false },
        { name: "JavaScript", progress: 70, unlocked: true, completed: false },
        { name: "React", progress: 45, unlocked: true, completed: false },
        { name: "Node.js", progress: 20, unlocked: false, completed: false }
      ]
    },
    "Advanced Skills": {
      level: 3,
      skills: [
        { name: "Database Design", progress: 0, unlocked: false, completed: false },
        { name: "System Design", progress: 0, unlocked: false, completed: false },
        { name: "Cloud Platforms", progress: 0, unlocked: false, completed: false },
        { name: "DevOps", progress: 0, unlocked: false, completed: false }
      ]
    },
    "Industry Ready": {
      level: 4,
      skills: [
        { name: "Portfolio Projects", progress: 0, unlocked: false, completed: false },
        { name: "Interview Prep", progress: 0, unlocked: false, completed: false },
        { name: "Soft Skills", progress: 0, unlocked: false, completed: false },
        { name: "Industry Knowledge", progress: 0, unlocked: false, completed: false }
      ]
    }
  }

  const milestones = [
    {
      title: "First Steps",
      description: "Complete programming fundamentals",
      progress: 80,
      completed: false,
      reward: "100 XP + Coding Badge"
    },
    {
      title: "Web Developer",
      description: "Build your first web application",
      progress: 35,
      completed: false,
      reward: "250 XP + Web Dev Badge"
    },
    {
      title: "Full Stack",
      description: "Master both frontend and backend",
      progress: 0,
      completed: false,
      reward: "500 XP + Full Stack Badge"
    },
    {
      title: "Industry Ready",
      description: "Complete portfolio and interview prep",
      progress: 0,
      completed: false,
      reward: "1000 XP + Career Ready Badge"
    }
  ]

  const getSkillIcon = (skillName: string) => {
    if (skillName.includes('Programming') || skillName.includes('JavaScript')) return Code
    if (skillName.includes('Problem') || skillName.includes('Algorithm')) return Target
    if (skillName.includes('Portfolio') || skillName.includes('Interview')) return Trophy
    return Book
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
            Your Learning Roadmap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Level up your skills with our gamified learning path designed just for you
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <Trophy className={`w-6 h-6 ${milestone.completed ? 'text-yellow-400' : 'text-gray-500'}`} />
                <span className="text-sm text-gray-400">Level {index + 1}</span>
              </div>
              <h3 className="font-bold text-white mb-2">{milestone.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{milestone.description}</p>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-primary-400">{milestone.progress}%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${milestone.progress}%` }}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500">{milestone.reward}</p>
            </div>
          ))}
        </motion.div>

        {/* Skill Tree */}
        <div className="space-y-12">
          {Object.entries(skillTree).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full p-3 mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{category}</h2>
                  <p className="text-gray-400">Level {data.level}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.skills.map((skill, skillIndex) => {
                  const SkillIcon = getSkillIcon(skill.name)
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => skill.unlocked && setSelectedSkill(skill.name)}
                      className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        skill.unlocked
                          ? 'bg-dark-800/50 backdrop-blur-xl border-dark-700/50 hover:border-primary-500/30'
                          : 'bg-dark-900/50 border-dark-800/50 opacity-60'
                      }`}
                    >
                      {/* Lock Overlay */}
                      {!skill.unlocked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-dark-900/80 rounded-2xl">
                          <Lock className="w-8 h-8 text-gray-500" />
                        </div>
                      )}

                      {/* Skill Content */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl ${
                          skill.completed 
                            ? 'bg-green-500/20 text-green-400' 
                            : skill.unlocked 
                            ? 'bg-primary-500/20 text-primary-400'
                            : 'bg-gray-500/20 text-gray-500'
                        }`}>
                          <SkillIcon className="w-5 h-5" />
                        </div>
                        {skill.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-500" />
                        )}
                      </div>

                      <h3 className="font-semibold text-white mb-3">{skill.name}</h3>

                      {skill.unlocked && (
                        <>
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-400">Progress</span>
                              <span className="text-primary-400">{skill.progress}%</span>
                            </div>
                            <div className="w-full bg-dark-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${skill.progress}%` }}
                              />
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-primary-500/20 text-primary-400 border border-primary-500/30 py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-500/30 transition-colors flex items-center justify-center space-x-2"
                          >
                            <Play className="w-4 h-4" />
                            <span>Continue</span>
                          </motion.button>
                        </>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Connection Line */}
              {categoryIndex < Object.keys(skillTree).length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-secondary-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Today's Challenge?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Complete your daily tasks to unlock new skills and advance on your roadmap.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-4 px-8 rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <Zap className="w-5 h-5" />
              <span>Start Daily Tasks</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Roadmap
