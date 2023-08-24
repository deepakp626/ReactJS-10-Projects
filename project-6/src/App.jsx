import { useState } from 'react'
import './App.css'
import TopNav from './Components/TopNav'
import SideDrawer from './Components/SideDrawer'
import SideNav from './Components/SideNav'
import Dashboard from './pages/Dashboard/Dashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Transaction from './pages/Transaction.jsx/Transaction.jsx'
import Support from './pages/Support/Support.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
