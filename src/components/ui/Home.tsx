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
      <h1 className='text-2xl sm:text-4xl text-center font-semibold animate-blurred-fade-in'>Mantente organizado con <span className='text-primary font-bold'>ToDo List!</span></h1>
      <p className='text-normal sm:text-lg text-center text-text/50 animate-blurred-fade-in'>La forma más sencilla de gestionar tus tareas diarias.</p>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 my-5 sm:my-10 w-full'>
        <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7 animate-blurred-fade-in'>
          <IconListDetails className='size-8 sm:size-10 text-primary' />
          <span className='text-normal sm:text-xl font-bold'>{tasks.length}</span>
          <span className='text-sm sm:text-normal'>Total de tareas</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7 animate-blurred-fade-in'>
          <IconCircle className='size-8 sm:size-10 text-primary' />
          <span className='text-normal sm:text-xl font-bold'>{tasks.filter(task => !task.completed).length}</span>
          <span className='text-sm sm:text-normal'>Tareas pendientes</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7 animate-blurred-fade-in'>
          <IconCircleCheck className='size-8 sm:size-10 text-primary' />
          <span className='text-normal sm:text-xl font-bold'>{tasks.filter(task => task.completed).length}</span>
          <span className='text-sm sm:text-normal'>Tareas completadas</span>
        </div>
      </div>
      <form onSubmit={handleAddTask} className='w-full sm:w-2/5 flex items-center gap-5 rounded-xl border-2 border-dashed border-accent bg-secondary/50 p-5 sm:px-10 sm:py-7 animate-blurred-fade-in'>
        <input type='text' name='task' placeholder='Agregar nueva tarea...' className='w-full pb-2 border-b-2 border-primary/10 bg-transparent focus:outline-none placeholder:text-text/50' />
        <button type='submit' className='bg-primary border-2 border-primary p-2 rounded-lg cursor-pointer hover:bg-primary/50 transition-colors'>
          <IconPlus className='text-background' />
        </button>
      </form>
      <div className='w-full max-h-96 overflow-y-auto flex flex-col items-center mt-3 gap-2'>
        {tasks.map(task => (
          <div key={task.id} className='w-full sm:w-2/5 flex items-center justify-between rounded-xl border-2 border-accent bg-secondary/50 p-5 sm:px-10 sm:py-7 group hover:border-primary transition-colors animate-fade-in-right'>
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
        ))}
      </div>
    </main>
  )
}
