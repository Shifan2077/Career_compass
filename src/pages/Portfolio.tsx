
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '../store/useAppStore'
import {Plus, Edit3, Trash2, ExternalLink, Github, Download, Eye, Code, Palette, Globe, Star, Calendar, Tag, Image as ImageIcon, Link, Share2} from 'lucide-react'

const Portfolio = () => {
  const { user } = useAppStore()
  const [activeTab, setActiveTab] = useState<'projects' | 'skills' | 'preview'>('projects')
  const [showAddProject, setShowAddProject] = useState(false)

  const portfolioProjects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing online store operations with real-time analytics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      category: 'Web Development',
      status: 'Completed',
      date: '2024-01-15',
      githubUrl: 'https://github.com/example/ecommerce-dashboard',
      liveUrl: 'https://ecommerce-dashboard-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'Full Stack',
      status: 'In Progress',
      date: '2024-02-20',
      githubUrl: 'https://github.com/example/task-manager',
      liveUrl: null,
      featured: false
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with detailed forecasts and interactive maps.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'TypeScript', 'Weather API'],
      category: 'Mobile Development',
      status: 'Completed',
      date: '2023-12-10',
      githubUrl: 'https://github.com/example/weather-app',
      liveUrl: 'https://weather-app-demo.com',
      featured: true
    }
  ]

  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
        { name: 'Vue.js', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'CSS/Sass', level: 88, color: 'from-pink-500 to-rose-500' }
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-600 to-green-700' },
        { name: 'Python', level: 75, color: 'from-yellow-500 to-orange-500' },
        { name: 'PostgreSQL', level: 70, color: 'from-blue-700 to-indigo-600' },
        { name: 'MongoDB', level: 78, color: 'from-green-700 to-green-800' }
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 92, color: 'from-gray-700 to-gray-800' },
        { name: 'Docker', level: 65, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 60, color: 'from-orange-500 to-orange-600' },
        { name: 'Figma', level: 85, color: 'from-purple-500 to-purple-600' }
      ]
    }
  ]

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
            Portfolio Builder
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcase your projects and skills with a professional portfolio
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-8">
          <div className="bg-slate-800/50 rounded-xl p-1 border border-slate-700">
            {[
              { id: 'projects', label: 'Projects', icon: Code },
              { id: 'skills', label: 'Skills', icon: Star },
              { id: 'preview', label: 'Preview', icon: Eye }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Your Projects</h2>
                <button
                  onClick={() => setShowAddProject(true)}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg hover:from-primary-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Project
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden group"
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-medium rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-2">
                          <button className="p-2 bg-slate-800/80 text-white rounded-lg hover:bg-slate-700">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-red-500/80 text-white rounded-lg hover:bg-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-primary-400 font-medium">{project.category}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Calendar className="w-3 h-3" />
                          {new Date(project.date).toLocaleDateString()}
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-400 hover:text-white transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-slate-400 hover:text-white transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-8">
                {skillCategories.map((category) => (
                  <div key={category.name}>
                    <h3 className="text-xl font-bold text-white mb-6">{category.name}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium text-white">{skill.name}</span>
                            <span className="text-sm text-slate-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl hover:from-primary-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                  <Plus className="w-4 h-4" />
                  Add New Skill
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'preview' && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">Portfolio Preview</h2>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg hover:from-primary-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 text-gray-900">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full mx-auto mb-4"></div>
                    <h1 className="text-3xl font-bold mb-2">{user?.name || 'Your Name'}</h1>
                    <p className="text-gray-600">Full Stack Developer</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
                      <div className="space-y-4">
                        {portfolioProjects.filter(p => p.featured).map((project) => (
                          <div key={project.id} className="border rounded-lg p-4">
                            <h4 className="font-semibold">{project.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                            <div className="flex gap-2 mt-2">
                              {project.technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-gray-100 text-xs rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Top Skills</h3>
                      <div className="space-y-3">
                        {skillCategories[0].skills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm text-gray-600">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Portfolio
