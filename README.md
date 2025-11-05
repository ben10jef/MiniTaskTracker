# Mini Task Tracker — *Northumbria Healthcare*

A lightweight React app for managing daily tasks with simple CSS styling.  
Features task creation, filtering, persistence, and a minimal, user-friendly interface.

---

## Project Structure

```
src/
  components/
    Header.jsx         # App header bar
    AddTask.jsx        # Add new tasks (title, description, category)
    TaskList.jsx       # Displays filtered task list
    TaskRow.jsx        # Single task item with checkbox and delete
    StatusBar.jsx      # Category and status filters
  utils/
    constants.js       # Task categories and storage keys
    storage.js         # LocalStorage helpers + ID generator
  __tests__/
    App.test.jsx       # Unit test verifying task addition and persistence
  App.jsx              # Main app layout and state management
  App.css              # Minimal custom CSS styling
  main.jsx             # React entry point
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open the app in your browser (Vite will show the URL, usually `http://localhost:5173`).

---

## Testing

To run the included unit test (Vitest + Testing Library):

```bash
npm test
```

---

## Key Features

- **Add & Manage Tasks:** Title, description, and category selection.
- **Task List:** Shows tasks with completion checkbox and delete option.
- **Filtering:** Filter by category and task status (All / Active / Done).
- **Persistence:** All tasks are stored in `localStorage`.
- **Smart UX:**
    - Remembers your last selected category.
    - Refocuses input after adding a task.
- Green border for completed tasks, red for pending.
- **Unit Tested:** Ensures reliability and persistence.

---