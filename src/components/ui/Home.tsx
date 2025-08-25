import { IconPlus } from '@tabler/icons-react'
import { useTaskReducer } from '../../hooks/useTaskReducer'
import Stats from './Stats'
import TaskCard from '../common/TaskCard'

/**
 * * Componente de Inicio.
 * * Contiene lógica para gestionar las tareas.
 * * Muestra estadísticas sobre las tareas y formulario para agregar nuevas tareas.
 */

export default function Home() {
  const { tasks, addTask, removeTask, toggleTask, editTask } = useTaskReducer()

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const taskContent = formData.get('task')?.toString().trim()

    if (taskContent) {
      addTask(taskContent)
      e.currentTarget.reset()
    }
  }

  return (
    <main id='inicio' className='min-h-screen pt-24 pb-5 px-10 sm:pt-44 sm:px-15 flex flex-col items-center gap-1 sm:gap-2 transition-colors'>
      <h1 className='text-2xl sm:text-4xl text-center font-semibold animate-blurred-fade-in'>Mantente organizado con <span className='text-primary font-bold'>Notio!</span></h1>
      <p className='text-normal sm:text-lg text-center text-text/50 animate-blurred-fade-in'>La forma más sencilla de gestionar tus tareas diarias.</p>
      <Stats tasks={tasks} />
      <form onSubmit={handleAddTask} className='w-full sm:w-2/5 flex items-center gap-5 rounded-xl border-2 border-dashed border-accent bg-secondary/50 p-5 sm:px-10 sm:py-7 hover:border-primary transition-colors animate-blurred-fade-in'>
        <input type='text' name='task' placeholder='Agregar nueva tarea...' className='w-full pb-2 border-b-2 border-primary/10 bg-transparent focus:outline-none placeholder:text-text/50' />
        <button type='submit' className='bg-accent p-2 rounded-lg cursor-pointer hover:bg-primary transition-colors'>
          <IconPlus className='text-background' />
        </button>
      </form>
      <div className='w-full max-h-96 overflow-y-auto flex flex-col items-center mt-3 gap-2'>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} toggleTask={toggleTask} removeTask={removeTask} editTask={editTask} />
        ))}
      </div>
    </main>
  )
}
