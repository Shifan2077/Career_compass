
import React from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '../store/useAppStore'
import {TrendingUp, DollarSign, Users, Globe, Star, ArrowRight, Briefcase, Code, Palette, Calculator} from 'lucide-react'

const CareerPaths = () => {
  const { careerPaths } = useAppStore()

  const careerOptions = [
    {
      id: 1,
      title: "Full Stack Developer",
      match: 95,
      demandTrend: "+23%",
      salaryRange: "₹8-25L",
      globalSalary: "$60-120K",
      icon: Code,
      description: "Build end-to-end web applications with modern technologies",
      skills: ["React", "Node.js", "Database Design", "Cloud Platforms"],
      companies: ["Google", "Microsoft", "Flipkart", "Zomato"],
      whyMatch: "Your strong analytical skills and love for problem-solving make you perfect for full-stack development.",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      match: 88,
      demandTrend: "+18%",
      salaryRange: "₹6-20L",
      globalSalary: "$50-100K",
      icon: Palette,
      description: "Create intuitive and beautiful user experiences",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      companies: ["Adobe", "Swiggy", "Paytm", "Razorpay"],
      whyMatch: "Your creative thinking and attention to detail align perfectly with UX design principles.",
      color: "from-pink-500 to-orange-500"
    },
    {
      id: 3,
      title: "Data Scientist",
      match: 82,
      demandTrend: "+31%",
      salaryRange: "₹10-30L",
      globalSalary: "$80-150K",
      icon: Calculator,
      description: "Extract insights from data to drive business decisions",
      skills: ["Python", "Machine Learning", "Statistics", "SQL"],
      companies: ["Amazon", "Netflix", "Ola", "PhonePe"],
      whyMatch: "Your mathematical aptitude and curiosity about patterns make data science ideal for you.",
      color: "from-green-500 to-teal-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
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
            Your Career Paths
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-curated career recommendations based on your assessment results and market trends
          </p>
        </motion.div>

        {/* Career Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 lg:gap-12"
        >
          {careerOptions.map((career, index) => (
            <motion.div
              key={career.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-dark-800/50 backdrop-blur-xl rounded-3xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${career.color}`}>
                      <career.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{career.title}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold text-yellow-400">{career.match}% Match</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-semibold text-green-400">{career.demandTrend}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Salary Info */}
                  <div className="flex space-x-6">
                    <div className="text-center">
                      <div className="flex items-center space-x-1 mb-1">
                        <DollarSign className="w-4 h-4 text-primary-400" />
                        <span className="text-sm text-gray-400">India</span>
                      </div>
                      <p className="text-lg font-bold text-white">{career.salaryRange}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center space-x-1 mb-1">
                        <Globe className="w-4 h-4 text-secondary-400" />
                        <span className="text-sm text-gray-400">Global</span>
                      </div>
                      <p className="text-lg font-bold text-white">{career.globalSalary}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6">{career.description}</p>

                {/* Why This Matches */}
                <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-6 mb-6 border border-primary-500/20">
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">Why this suits you</h4>
                  <p className="text-gray-300">{career.whyMatch}</p>
                </div>

                {/* Skills & Companies */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-primary-400" />
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-dark-700 text-primary-300 rounded-full text-sm border border-primary-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-secondary-400" />
                      Top Companies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, companyIndex) => (
                        <span
                          key={companyIndex}
                          className="px-3 py-1 bg-dark-700 text-secondary-300 rounded-full text-sm border border-secondary-500/20"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${career.color} text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300`}
                >
                  <span>Start Learning Path</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Choose a career path and get a personalized roadmap with daily tasks, projects, and mock interviews.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-4 px-8 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              View My Roadmap
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CareerPaths
