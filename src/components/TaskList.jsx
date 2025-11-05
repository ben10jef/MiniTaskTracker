import React from 'react'
import TaskRow from './TaskRow'

export default function TaskList({ tasks, onToggle, onDelete, statusFilter }) {
  if (!tasks.length) {
    let msg = 'Your task list is empty. Add a new task to get started.'
    if (statusFilter === 'Active') {
      msg = 'No active tasks right now. Nice!'
    } else if (statusFilter === 'Done') {
      msg = 'No completed tasks yet.'
    }
    return <p className="empty">{msg}</p>
  }

  return (
      <ul className="list" aria-label="Task list">
        {tasks.map(t => (
            <TaskRow
                key={t.id}
                task={t}
                onToggle={() => onToggle(t.id)}
                onDelete={() => onDelete(t.id)}
            />
        ))}
      </ul>
  )
}
