/**
 * * Componente reutilizable de tarjeta de estadísticas.
 * @param children - Contenido de la tarjeta, generalmente un ícono.
 * @param stat - Valor de la estadística.
 * @param label - Etiqueta de la estadística.
 */

export default function StatCard({ children, stat, label }: { children: React.ReactNode, stat: number, label: string }) {
  return (
    <div className='flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-accent bg-secondary/50 py-5 sm:px-10 sm:py-7 animate-blurred-fade-in'>
      { children }
      <span className='text-normal sm:text-xl font-bold'>{stat}</span>
      <span className='text-sm sm:text-normal'>{label}</span>
    </div>
  )
}
