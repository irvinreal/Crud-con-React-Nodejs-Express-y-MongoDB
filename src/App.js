import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PageHome from './pages/PageHome'
import PageUsers from './pages/PageUsers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageHome />
  },
  {
    path: '/users',
    element: <PageUsers />
  }
])

function App() {
  return (
    <main className='App'>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
