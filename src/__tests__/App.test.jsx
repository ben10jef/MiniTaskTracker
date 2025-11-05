import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from '../App.jsx'
import { TASKS_KEY } from '../utils/constants.js'

describe('Mini Task Tracker', () => {
  beforeEach(() => localStorage.clear())

  it('adds a task to the list and persists', async () => {
    render(<App />)
    const input = screen.getByLabelText(/task title/i)
    const add = screen.getByRole('button', { name: /add/i })

    await userEvent.type(input, 'Buy milk')
    await userEvent.click(add)

    expect(screen.getByText('Buy milk')).toBeInTheDocument()

    const data = JSON.parse(localStorage.getItem(TASKS_KEY))
    expect(Array.isArray(data)).toBe(true)
    expect(data.some(t => t.title === 'Buy milk')).toBe(true)
  })
})
