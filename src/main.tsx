import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo.ts'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    todo: todoReducer,
  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
