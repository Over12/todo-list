import { useReducer } from 'react'
import { initialTasks, taskReducer } from '../reducers/taskReducer'
import type { Task } from '../types/task'

export const useTaskReducer = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  const addTask = (task: Task) => {
    dispatch({ type: 'ADD_TASK', payload: task })
  }

  const removeTask = (task: Task) => {
    dispatch({ type: 'REMOVE_TASK', payload: task })
  }

  const toggleTask = (task: Task) => {
    dispatch({ type: 'TOGGLE_TASK', payload: task })
  }

  return { tasks, addTask, removeTask, toggleTask }
}
