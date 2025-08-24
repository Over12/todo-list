import { IconListDetails, IconCircle, IconCircleCheck } from '@tabler/icons-react'

export default function Home() {
  return (
    <main className='min-h-screen pt-24 sm:pt-0 px-10 sm:px-15 flex flex-col items-center justify-center gap-1 sm:gap-2 bg-background text-text transition-colors'>
      <h1 className='text-2xl sm:text-4xl text-center font-semibold'>Mantente organizado con <span className='text-primary font-bold'>ToDo List!</span></h1>
      <p className='text-normal sm:text-lg text-center text-gray-400'>La forma más sencilla de gestionar tus tareas diarias.</p>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 my-5 sm:my-10 w-full'>
        <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7'>
          <IconListDetails className='size-8 sm:size-10 text-primary' />
          <span className='text-normal sm:text-xl font-bold'>1</span>
          <span className='text-sm sm:text-normal'>Total de tareas</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7'>
          <IconCircle className='size-8 sm:size-10 text-primary' />
          <span className='text-normal sm:text-xl font-bold'>5</span>
          <span className='text-sm sm:text-normal'>Tareas pendientes</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7'>
          <IconCircleCheck className='size-8 sm:size-10 text-primary' />
          <span className='text-normal sm:text-xl font-bold'>2</span>
          <span className='text-sm sm:text-normal'>Tareas completadas</span>
        </div>
      </div>
    </main>
  )
}
