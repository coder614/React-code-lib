import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Comp/home/Home.jsx'
import About from './Comp/About/About.jsx'
import OtherPage from './Comp/OtherPage/OtherPage.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/OtherPage' element={<OtherPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
