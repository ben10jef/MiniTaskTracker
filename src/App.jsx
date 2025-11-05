import React, {useEffect, useMemo, useRef, useState} from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import StatusBar from './components/StatusBar'
import {CATEGORIES} from './utils/constants'
import {load_last_category, load_tasks, make_id, save_last_category, save_tasks} from './utils/storage'

export default function App() {
    const [tasks, setTasks] = useState(() => load_tasks())
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState(() => load_last_category() || 'Work')
    const [statusFilter, setStatusFilter] = useState('All') // All | Active | Done
    const [categoryFilter, setCategoryFilter] = useState('All') // All or specific category
    const inputRef = useRef(null)

    useEffect(() => {
        save_tasks(tasks)
    }, [tasks])

    const counts = useMemo(() => {
        const active = tasks.filter(t => !t.done).length
        const done = tasks.length - active
        return {all: tasks.length, active, done}
    }, [tasks])

    const filtered = useMemo(() => {
        const byStatus = (t) => statusFilter === 'All' ? true : (statusFilter === 'Active' ? !t.done : t.done)
        const byCat = (t) => categoryFilter === 'All' ? true : t.category === categoryFilter
        return tasks
            .filter(t => byStatus(t) && byCat(t))
            .slice()
            .sort((a, b) => Number(a.done) - Number(b.done) || a.created_at - b.created_at)
    }, [tasks, statusFilter, categoryFilter])

    function toggleDone(id) {
        setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t))
    }

    function removeTask(id) {
        setTasks(prev => prev.filter(t => t.id !== id))
    }

    function setInputRef(ref) {
        inputRef.current = ref.current
    }

    function focusInput() {
        if (inputRef.current) inputRef.current.focus()
    }

    const handleAdd = {
        setInputRef,
        submit: () => {
            const title_trimmed = title.trim()
            const desc_trimmed = desc.trim()
            if (!title_trimmed) return
            const newTask = {
                id: make_id(),
                title: title_trimmed,
                description: desc_trimmed,
                category,
                done: false,
                created_at: Date.now()
            }
            setTasks(prev => [...prev, newTask])
            save_last_category(category)
            setTitle('');
            setDesc('')
            setTimeout(focusInput, 0)
        }
    }

    const handleSetCategoryFilter = (category) => {
        setCategoryFilter(category)
    }

    const handleStatusFilter = (status) => {
        setStatusFilter(status);
        handleSetCategoryFilter('All')
    }

    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Header/>
            <main style={{flex: 1}}>
                <div className="container">
                    <div className="grid">
                        <div>
                            <AddTask
                                title={title} setTitle={setTitle}
                                desc={desc} setDesc={setDesc}
                                category={category} setCategory={setCategory}
                                onAdd={handleAdd}
                            />
                        </div>
                        <div className="card panel">
                            <div className="panel-header">
                                <div className="panel-title">Your Tasks</div>
                                <div className="panel-filter">
                                    <label htmlFor="cat-filter">Category</label>
                                    <select
                                        id="cat-filter"
                                        value={categoryFilter}
                                        onChange={e => handleSetCategoryFilter(e.target.value)}
                                        className="select"
                                        style={{padding: '6px 8px', fontSize: 12}}
                                    >
                                        <option value="All">All</option>
                                        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="panel-scroll">
                                <TaskList
                                    tasks={filtered}
                                    onToggle={toggleDone}
                                    onDelete={removeTask}
                                    statusFilter={statusFilter}
                                />
                            </div>

                            <StatusBar counts={counts} statusFilter={statusFilter}
                                       setStatusFilter={handleStatusFilter}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
