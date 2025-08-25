import type { Task } from '../types/task'

export const initialTasks: Task[] = []

export const taskReducer = (state: Task[], action: { type: string, payload: Task }) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TASK':
      if (state.some(task => task.id === payload.id)) return state
      return [...state, payload]
    
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== payload.id)
    
    case 'TOGGLE_TASK':
      return state.map(task => task.id === payload.id ? { ...task, completed: !task.completed } : task)
    
    case 'EDIT_TASK':
      return state.map(task => task.id === payload.id ? { ...task, content: payload.content } : task)
  }

  return state
}
