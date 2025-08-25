import type { Task } from '../types/task'

// * Estado inicial de las tareas.
export const initialTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]')

/**
 * * Reductor de tareas.
 * @param state - Estado actual de las tareas.
 * @param action - Acción a realizar.
 * @returns Nuevo estado de las tareas.
 */

export const taskReducer = (state: Task[], action: { type: string, payload: Task }) => {
  const { type, payload } = action
  let newState = state

  switch (type) {
    case 'ADD_TASK':
      if (state.some(task => task.id === payload.id)) break
      newState = [...state, payload]
      break
    
    case 'REMOVE_TASK':
      newState = state.filter(task => task.id !== payload.id)
      break
    
    case 'TOGGLE_TASK':
      newState = state.map(task => task.id === payload.id ? { ...task, completed: !task.completed } : task)
      break
    
    case 'EDIT_TASK':
      newState = state.map(task => task.id === payload.id ? { ...task, content: payload.content } : task)
      break
  }

  localStorage.setItem('tasks', JSON.stringify(newState))
  return newState
}
