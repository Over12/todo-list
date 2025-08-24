import { IconCircle, IconCircleCheck, IconTrash } from '@tabler/icons-react'
import type { Task } from '../../types/task'

export default function TaskCard({ task, toggleTask, removeTask }: { task: Task, toggleTask: (task: Task) => void, removeTask: (task: Task) => void }) {
  return (
    <div className='w-full sm:w-2/5 flex items-center justify-between rounded-xl border-2 border-accent bg-secondary/50 p-5 sm:px-10 sm:py-7 group hover:border-primary transition-colors animate-fade-in-right'>
      <div className='flex gap-1 items-center'>
        <button type='button' onClick={() => toggleTask(task)} className='cursor-pointer'>
          {task.completed ? <IconCircleCheck className='size-6 text-primary' /> : <IconCircle className='size- text-primary' />}
        </button>
        <p className={`${task.completed ? 'line-through text-text/50' : ''}`}>{task.content}</p>
      </div>
      <button type='button' onClick={() => removeTask(task)} className='opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
        <IconTrash className='size-6 text-red-500' />
      </button>
    </div>
  )
}
