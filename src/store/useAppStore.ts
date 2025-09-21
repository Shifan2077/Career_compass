
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface AssessmentResult {
  interests: string[]
  skillLevel: 'beginner' | 'intermediate' | 'advanced'
  learningStyle: string[]
  careerGoals: string[]
  personalityTraits: string[]
  aptitudeScores: Record<string, number>
}

export interface CareerPath {
  id: string
  title: string
  description: string
  demandTrend: number
  salaryRange: {
    india: { min: number; max: number }
    global: { min: number; max: number }
  }
  matchPercentage: number
  skills: string[]
  whySuitable: string
}

export interface Skill {
  id: string
  name: string
  category: 'core' | 'advanced' | 'project' | 'industry'
  progress: number
  isUnlocked: boolean
  prerequisites: string[]
}

export interface DailyTask {
  id: string
  type: 'practice' | 'resource' | 'project'
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  estimatedTime: number
  isCompleted: boolean
  url?: string
}

interface AppStore {
  // User state
  user: User | null
  setUser: (user: User | null) => void
  
  // Assessment state
  isAssessmentCompleted: boolean
  assessmentResult: AssessmentResult | null
  setAssessmentResult: (result: AssessmentResult) => void
  
  // Career paths
  careerPaths: CareerPath[]
  selectedCareerPath: CareerPath | null
  setCareerPaths: (paths: CareerPath[]) => void
  setSelectedCareerPath: (path: CareerPath) => void
  
  // Skills and roadmap
  skills: Skill[]
  setSkills: (skills: Skill[]) => void
  updateSkillProgress: (skillId: string, progress: number) => void
  
  // Daily tasks
  dailyTasks: DailyTask[]
  streak: number
  setDailyTasks: (tasks: DailyTask[]) => void
  completeTask: (taskId: string) => void
  
  // Portfolio
  projects: any[]
  setProjects: (projects: any[]) => void
  addProject: (project: any) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // User state
      user: null,
      setUser: (user) => set({ user }),
      
      // Assessment state
      isAssessmentCompleted: false,
      assessmentResult: null,
      setAssessmentResult: (result) => set({ 
        assessmentResult: result, 
        isAssessmentCompleted: true 
      }),
      
      // Career paths
      careerPaths: [],
      selectedCareerPath: null,
      setCareerPaths: (paths) => set({ careerPaths: paths }),
      setSelectedCareerPath: (path) => set({ selectedCareerPath: path }),
      
      // Skills and roadmap
      skills: [],
      setSkills: (skills) => set({ skills }),
      updateSkillProgress: (skillId, progress) => set((state) => ({
        skills: state.skills.map(skill =>
          skill.id === skillId ? { ...skill, progress } : skill
        )
      })),
      
      // Daily tasks
      dailyTasks: [],
      streak: 0,
      setDailyTasks: (tasks) => set({ dailyTasks: tasks }),
      completeTask: (taskId) => set((state) => ({
        dailyTasks: state.dailyTasks.map(task =>
          task.id === taskId ? { ...task, isCompleted: true } : task
        ),
        streak: state.streak + 1
      })),
      
      // Portfolio
      projects: [],
      setProjects: (projects) => set({ projects }),
      addProject: (project) => set((state) => ({
        projects: [...state.projects, project]
      })),
    }),
    {
      name: 'career-compass-storage',
    }
  )
)
