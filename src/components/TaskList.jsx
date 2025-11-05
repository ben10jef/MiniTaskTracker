import React from 'react'
import TaskRow from './TaskRow'

export default function TaskList({ tasks, onToggle, onDelete }){
  if (!tasks.length){
    return <p className="empty">Your task list is empty. Add a new task to get started.</p>
  }
  return (
    <ul className="list" aria-label="Task list">
      {tasks.map(t => (
        <TaskRow key={t.id} task={t} onToggle={() => onToggle(t.id)} onDelete={() => onDelete(t.id)} />
      ))}
    </ul>
  )
}
