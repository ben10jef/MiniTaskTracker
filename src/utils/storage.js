import {LAST_CAT_KEY, TASKS_KEY} from './constants'

export function load_tasks() {
    try {
        const raw = localStorage.getItem(TASKS_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

export function save_tasks(tasks) {
    try {
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
    } catch {
    }
}

export function load_last_category() {
    try {
        const raw = localStorage.getItem(LAST_CAT_KEY)
        return raw || null
    } catch {
        return null
    }
}

export function save_last_category(cat) {
    try {
        localStorage.setItem(LAST_CAT_KEY, cat)
    } catch {
    }
}

export function make_id() {
    if (globalThis.crypto?.randomUUID) return crypto.randomUUID()
    return String(Date.now() + Math.random())
}
