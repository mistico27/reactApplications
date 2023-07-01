import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoList from './components/toDoList.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <ToDoList ToDoList/>
    </div>
  </React.StrictMode>,
)
