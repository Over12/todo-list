import { IconCheck, IconCircle, IconCircleCheck, IconPencil, IconTrash, IconX } from '@tabler/icons-react'
import type { Task } from '../../types/task'
import { useEffect, useRef, useState } from 'react'

/**
 * * Componente de tarjeta de tarea.
 * @param task - Tarea a mostrar.
 * @param toggleTask - Función para alternar el estado de la tarea.
 * @param removeTask - Función para eliminar la tarea.
 * @param editTask - Función para editar la tarea.
 */

export default function TaskCard({ task, toggleTask, removeTask, editTask }: { task: Task, toggleTask: (task: Task) => void, removeTask: (task: Task) => void, editTask: (task: Task) => void }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(task.content)
  const inputRef = useRef<HTMLInputElement>(null)

  // Enfocar el input al entrar en modo edición
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  // Manejar la edición de la tarea
  const handleEdit = () => {
    setIsEditing(!isEditing)

    // Restablecer el contenido editado si se cancela la edición
    if (isEditing) {
      setEditedContent(task.content)
    }
  }

  const onEditedContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedContent(e.target.value)
  }

  const handleSave = () => {
    const updatedTask = { ...task, content: editedContent }
    editTask(updatedTask)

    setIsEditing(false)
  }

  return (
    <div className='w-full sm:w-2/5 flex items-center justify-between gap-2 rounded-xl border-2 border-accent bg-secondary/50 p-5 sm:px-10 sm:py-7 group hover:border-primary transition-colors animate-fade-in-right'>
      <div className='flex w-full gap-1 items-center overflow-hidden'>
        <button type='button' onClick={() => toggleTask(task)} className='cursor-pointer'>
          {task.completed ? <IconCircleCheck className='size-6 text-primary' /> : <IconCircle className='size- text-primary' />}
        </button>
        <p className={`text-pretty ${isEditing ? 'hidden' : ''} ${task.completed ? 'line-through text-text/50' : ''}`}>{task.content}</p>
        <input ref={inputRef} type="text" onChange={onEditedContentChange} value={editedContent} className={`w-full focus:outline-none ${task.completed ? 'line-through text-text/50' : ''} ${isEditing ? '' : 'hidden'}`} />
      </div>
      <div className='flex items-center justify-between gap-2'>
        {!isEditing && (
          <>
            <button type='button' onClick={handleEdit} className='opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
              <IconPencil className='size-6 text-gray-500' />
            </button>
            <button type='button' onClick={() => removeTask(task)} className='opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
              <IconTrash className='size-6 text-red-500' />
            </button>
          </>
        )}
        {isEditing && (
          <>
            <button type='button' onClick={handleEdit} className='cursor-pointer'>
              <IconX className='size-6 text-red-500' />
            </button>
            <button type='button' onClick={handleSave} className='cursor-pointer'>
              <IconCheck className='size-6 text-green-500' />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
