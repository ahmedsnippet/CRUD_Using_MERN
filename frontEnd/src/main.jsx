import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Toaster} from 'react-hot-toast'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Add from './components/Add.jsx'
import Edit from './components/Edit.jsx'
import Delete from './components/Delete.jsx'
import Read from './components/Read.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/add' element={<Add/>} />
      <Route path='/read' element={<Read/>}/>
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='/delete' element={<Delete/>} />
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>
)
