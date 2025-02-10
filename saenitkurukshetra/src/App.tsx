import './App.css'
import Home from './components/HomePage/HomePage'
import Autokriti from './components/Autokriti/Autokriti'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/autokriti',
    element: <Autokriti />
  }
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
