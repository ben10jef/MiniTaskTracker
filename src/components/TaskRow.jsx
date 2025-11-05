import React from 'react'

export default function TaskRow({task, onToggle, onDelete}) {
    return (
        <li className={`row ${task.done ? 'row-done' : 'row-pending'}`}>
            <div style={{display: 'flex', gap: 8}}>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={onToggle}
                    aria-label={task.done ? 'Mark as not done' : 'Mark as done'}
                    style={{marginTop: 3}}
                />
                <div>
                    <div className={'row-title ' + (task.done ? 'done' : '')}>{task.title}</div>
                    <div className="row-desc">
                        {task.description || <span style={{fontStyle: 'italic'}}>No description</span>}
                    </div>
                    <div className="row-cat">{task.category}</div>
                </div>
            </div>
            <div className="row-actions">
                <button className="btn btn-ghost btn-xs btn-danger" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </li>

    )
}
