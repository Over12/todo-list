export default function Contact() {
  return (
    <section id='contacto' className='flex flex-col items-center justify-center px-10 sm:px-15 py-10'>
      <h2 className='text-2xl sm:text-3xl uppercase font-bold mb-3 sm:mb-5'>Contáctanos</h2>
      <form action='submit' className='w-full sm:w-1/3 flex flex-col gap-4 sm:gap-5 bg-secondary/50 border-2 border-accent p-5 sm:px-8 sm:py-10 rounded-xl hover:border-primary transition-colors'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='nombre' className='font-semibold'>Nombre:</label>
          <input type='text' name='nombre' placeholder='Ingrese su nombre...' required className='px-2 py-1 border-b-2 border-accent focus:outline-none focus:border-primary transition-colors' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='font-semibold'>Email:</label>
          <input type='email' name='email' placeholder='Ingrese su email...' required className='px-2 py-1 border-b-2 border-accent focus:outline-none focus:border-primary transition-colors' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='mensaje' className='font-semibold'>Mensaje:</label>
          <textarea name='mensaje' id='mensaje' placeholder='Ingrese su mensaje...' required className='resize-none min-h-24 px-2 py-1 rounded-md border-2 border-accent placeholder:text-text/50 focus:outline-none focus:border-primary transition-colors' />
        </div>
        <button type='submit' className='uppercase bg-accent px-3 py-2 rounded-md cursor-pointer hover:bg-primary transition-colors'>
          Enviar
        </button>
      </form>
    </section>
  )
}
