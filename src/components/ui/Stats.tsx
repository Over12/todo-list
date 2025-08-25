import { IconCircle, IconCircleCheck, IconListDetails } from '@tabler/icons-react'
import type { Task } from '../../types/task'
import StatCard from '../common/StatCard'

/**
 * * Componente que muestra estadísticas sobre las tareas.
 * @param tasks - Lista de tareas.
 */

export default function Stats({ tasks }: { tasks: Task[] }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 my-5 sm:my-10 w-full'>
      <StatCard stat={tasks.length} label="Total de tareas">
        <IconListDetails className='size-8 sm:size-10 text-primary' />
      </StatCard>
      <StatCard stat={tasks.filter(task => !task.completed).length} label="Tareas pendientes">
        <IconCircle className='size-8 sm:size-10 text-primary' />
      </StatCard>
      <StatCard stat={tasks.filter(task => task.completed).length} label="Tareas completadas">
        <IconCircleCheck className='size-8 sm:size-10 text-primary' />
      </StatCard>
    </div>
  )
}