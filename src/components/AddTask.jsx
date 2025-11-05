import React, { useRef, useEffect } from 'react'
import { CATEGORIES } from '../utils/constants'

export default function AddTask({ title, setTitle, desc, setDesc, category, setCategory, onAdd }){
  const inputRef = useRef(null)

  useEffect(() => {
    if (typeof onAdd?.setInputRef === 'function') onAdd.setInputRef(inputRef)
  }, [onAdd])

  function handleKey(e){
    if (e.key === 'Enter') onAdd.submit()
  }

  return (
    <div className="card pad">
      <div className="row-title" style={{marginBottom: '12px'}}>Add Task</div>

      <label htmlFor="task-title" className="row-desc" style={{display:'block', marginBottom:4}}>Task title *</label>
      <input
        id="task-title"
        ref={inputRef}
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKey}
        placeholder="e.g., Buy groceries"
        className="input"
      />

      <label htmlFor="task-desc" className="row-desc" style={{display:'block', marginTop:12, marginBottom:4}}>Description (optional)</label>
      <textarea
        id="task-desc"
        value={desc}
        onChange={e => setDesc(e.target.value)}
        className="textarea"
        placeholder="Add details, links, subtasks…"
      />

      <label htmlFor="task-cat" className="row-desc" style={{display:'block', marginTop:12, marginBottom:4}}>Category</label>
      <select
        id="task-cat"
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="select"
      >
        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <button
        onClick={onAdd.submit}
        disabled={!title.trim()}
        className="btn btn-primary"
        style={{width:'100%', marginTop:12}}
      >
        + Add
      </button>
    </div>
  )
}
