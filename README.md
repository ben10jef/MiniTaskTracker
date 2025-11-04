# Mini Task Tracker — CSS Only

No Tailwind/Bootstrap. Minimal custom CSS, modular React components, and a unit test.

## Structure
```
src/
  components/
    Header.jsx
    AddTask.jsx
    TaskList.jsx
    TaskRow.jsx
    StatusBar.jsx
  utils/
    constants.js
    storage.js
  __tests__/App.test.jsx
  App.jsx
  App.css
  main.jsx
```

## Run
```bash
npm install
npm run dev
```

## Test
```bash
npm test
```

## Notes
- Functionality: add, list with checkbox, filter by category, delete, status filters.
- UX: persists to localStorage, remembers last-used category, auto-focus after add.
- Code quality: components + shared utils; clear styles.
- Testing: at least one working unit test.
