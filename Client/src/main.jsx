import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import App from './App.jsx'
import Signup from './pages/Signup.jsx'
import CategarySelection from './pages/CategarySelection.jsx'
import Home from './pages/Home.jsx'
import ApplicationAPI from './context/ApplicationAPI.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/categarySelection' element={<CategarySelection />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApplicationAPI>
      <RouterProvider router={router} />
    </ApplicationAPI>
  </StrictMode>,
)
