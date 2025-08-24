import { IconListDetails, IconCircle, IconCircleCheck, IconPlus, IconTrash } from '@tabler/icons-react'
import { useTaskReducer } from '../../hooks/useTaskReducer'

export default function Home() {
  const { tasks, addTask, removeTask, toggleTask } = useTaskReducer()

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const taskContent = formData.get('task')?.toString().trim()

    if (taskContent) {
      const newTask = {
        id: Date.now(),
        content: taskContent,
        completed: false
      }

      addTask(newTask)
      e.currentTarget.reset()
    }
  }

  return (
    <main className='min-h-screen pt-24 pb-5 px-10 sm:pt-44 sm:px-15 flex flex-col items-center gap-1 sm:gap-2 bg-background text-text transition-colors'>
      <h1 className='text-2xl sm:text-4xl text-center font-semibold'>Mantente organizado con <span className='text-primary font-bold'>ToDo List!</span></h1>
      <p className='text-normal sm:text-lg text-center text-text/50'>La forma más sencilla de gestionar tus tareas diarias.</p>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 my-5 sm:my-10 w-full'>
        <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7'>
          <IconListDetails className='size-8 sm:size-10 text-primary' />
          <span className='text-normal sm:text-xl font-bold'>{tasks.length}</span>
          <span className='text-sm sm:text-normal'>Total de tareas</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7'>
          <IconCircle className='size-8 sm:size-10 text-primary' />
          <span className='text-normal sm:text-xl font-bold'>{tasks.filter(task => !task.completed).length}</span>
          <span className='text-sm sm:text-normal'>Tareas pendientes</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7'>
          <IconCircleCheck className='size-8 sm:size-10 text-primary' />
          <span className='text-normal sm:text-xl font-bold'>{tasks.filter(task => task.completed).length}</span>
          <span className='text-sm sm:text-normal'>Tareas completadas</span>
        </div>
      </div>
      <form onSubmit={handleAddTask} className='w-full sm:w-2/5 flex items-center gap-5 rounded-xl border-2 border-dashed border-accent bg-secondary/50 p-5 sm:px-10 sm:py-7'>
        <input type='text' name='task' placeholder='Agregar nueva tarea...' className='w-full pb-2 border-b-2 border-primary/10 bg-transparent focus:outline-none placeholder:text-text/50' />
        <button type='submit' className='bg-primary p-2 rounded-lg cursor-pointer'>
          <IconPlus className='text-background' />
        </button>
      </form>
      <div className='w-full max-h-96 overflow-y-auto flex flex-col items-center gap-2'>
        {tasks.map(task => (
          <div key={task.id} className='w-full sm:w-2/5 flex items-center justify-between rounded-xl border-2 border-accent bg-secondary/50 p-5 sm:px-10 sm:py-7'>
            <div className='flex gap-1 items-center'>
              <button type='button' onClick={() => toggleTask(task)}>
                {task.completed ? <IconCircleCheck className='size-6 text-primary' /> : <IconCircle className='size- text-primary' />}
              </button>
              <p className={`${task.completed ? 'line-through text-text/50' : ''}`}>{task.content}</p>
            </div>
            <button type='button' onClick={() => removeTask(task)}>
              <IconTrash className='size-6 text-red-500' />
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
