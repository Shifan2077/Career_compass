
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '../store/useAppStore'
import {CheckCircle, Circle, Flame, Star, Clock, BookOpen, Code, Target, Play, Award, Calendar, TrendingUp} from 'lucide-react'

const DailyTasks = () => {
  const { user } = useAppStore()
  const [completedTasks, setCompletedTasks] = useState<number[]>([])

  const currentStreak = 7
  const totalXP = 1250

  const todaysTasks = [
    {
      id: 1,
      type: "coding",
      title: "Array Manipulation Challenge",
      description: "Solve a medium-level problem on finding the maximum subarray sum",
      difficulty: "Medium",
      xp: 50,
      timeEstimate: "15-20 min",
      category: "Problem Solving",
      icon: Code,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      type: "learning",
      title: "React Hooks Deep Dive",
      description: "Watch: Advanced useState and useEffect patterns",
      difficulty: "Intermediate",
      xp: 30,
      timeEstimate: "10 min",
      category: "Web Development",
      icon: BookOpen,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      type: "practice",
      title: "API Integration Exercise",
      description: "Build a weather app component using REST API",
      difficulty: "Easy",
      xp: 40,
      timeEstimate: "25 min",
      category: "Practical Skills",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ]

  const weeklyProgress = [
    { day: "Mon", completed: true, xp: 120 },
    { day: "Tue", completed: true, xp: 95 },
    { day: "Wed", completed: true, xp: 110 },
    { day: "Thu", completed: true, xp: 85 },
    { day: "Fri", completed: true, xp: 130 },
    { day: "Sat", completed: true, xp: 105 },
    { day: "Sun", completed: false, xp: 0 }
  ]

  const achievements = [
    { name: "Week Warrior", description: "Complete 7 days in a row", progress: 6, target: 7, unlocked: false },
    { name: "Code Master", description: "Solve 50 coding problems", progress: 32, target: 50, unlocked: false },
    { name: "Learning Beast", description: "Watch 25 tutorials", progress: 18, target: 25, unlocked: false }
  ]

  const toggleTask = (taskId: number) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-500/20'
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20'
      case 'Hard': return 'text-red-400 bg-red-500/20'
      default: return 'text-blue-400 bg-blue-500/20'
    }
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
            Daily Challenges
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete your personalized tasks to maintain your streak and level up your skills
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-dark-800/50 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50">
            <div className="flex items-center justify-between mb-4">
              <Flame className="w-8 h-8 text-orange-400" />
              <span className="text-3xl font-bold text-white">{currentStreak}</span>
            </div>
            <h3 className="font-semibold text-white mb-1">Day Streak</h3>
            <p className="text-sm text-gray-400">Keep it going! 🔥</p>
          </div>

          <div className="bg-dark-800/50 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50">
            <div className="flex items-center justify-between mb-4">
              <Star className="w-8 h-8 text-yellow-400" />
              <span className="text-3xl font-bold text-white">{totalXP}</span>
            </div>
            <h3 className="font-semibold text-white mb-1">Total XP</h3>
            <p className="text-sm text-gray-400">Experience points earned</p>
          </div>

          <div className="bg-dark-800/50 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold text-white">
                {completedTasks.length}/{todaysTasks.length}
              </span>
            </div>
            <h3 className="font-semibold text-white mb-1">Today's Progress</h3>
            <p className="text-sm text-gray-400">Tasks completed</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Tasks */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-primary-400" />
              Today's Tasks
            </h2>
            
            <div className="space-y-6">
              {todaysTasks.map((task, index) => {
                const isCompleted = completedTasks.includes(task.id)
                const TaskIcon = task.icon
                
                return (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-dark-800/50 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${
                      isCompleted 
                        ? 'border-green-500/50 bg-green-500/5' 
                        : 'border-dark-700/50 hover:border-primary-500/30'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${task.color}`}>
                          <TaskIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">{task.title}</h3>
                          <p className="text-gray-400">{task.description}</p>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleTask(task.id)}
                        className="flex-shrink-0"
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-8 h-8 text-green-400" />
                        ) : (
                          <Circle className="w-8 h-8 text-gray-500 hover:text-primary-400 transition-colors" />
                        )}
                      </motion.button>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(task.difficulty)}`}>
                          {task.difficulty}
                        </span>
                        <span className="text-sm text-gray-400 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {task.timeEstimate}
                        </span>
                        <span className="text-sm text-primary-400 flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {task.xp} XP
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{task.category}</span>
                    </div>

                    {!isCompleted && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full bg-gradient-to-r ${task.color} text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300`}
                      >
                        <Play className="w-5 h-5" />
                        <span>Start Task</span>
                      </motion.button>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weekly Progress */}
            <div className="bg-dark-800/50 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary-400" />
                Weekly Progress
              </h3>
              
              <div className="space-y-3">
                {weeklyProgress.map((day, index) => (
                  <div key={day.day} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        day.completed ? 'bg-green-400' : 'bg-gray-600'
                      }`} />
                      <span className="text-gray-300">{day.day}</span>
                    </div>
                    <span className="text-sm text-gray-400">{day.xp} XP</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-dark-800/50 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white text-sm">{achievement.name}</h4>
                      <span className="text-xs text-gray-400">
                        {achievement.progress}/{achievement.target}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{achievement.description}</p>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(achievement.progress / achievement.target) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-6 border border-primary-500/20">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-500/20 text-primary-400 border border-primary-500/30 py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-500/30 transition-colors"
                >
                  View All Challenges
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-secondary-500/20 text-secondary-400 border border-secondary-500/30 py-2 px-4 rounded-lg text-sm font-medium hover:bg-secondary-500/30 transition-colors"
                >
                  Practice Mock Interview
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyTasks
