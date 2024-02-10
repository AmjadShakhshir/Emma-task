import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [{
        path: '/',
        element: <Home />
      },{
        path: '/quiz',
        element: <Quiz />
      }, {
        path: '/dashboard',
        element: <Dashboard />
      }]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App