import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Product from './Components/Product';
import User from './User';
import { Order } from './Order';
import NotFound from './Components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Login />
      </div>
    ),
  },
  {
    path: '/about',
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: 'product', // ✅ Relative path (auto-appends to /dashboard)
        element: <Product />,
      },
      {
        path: 'user', // ✅ Relative path
        element: <User />,
      },
      {
        path: 'order', // ✅ Relative path
        element: <Order />,
      },
    ],
  },
  {
    path:'*',
    element:<NotFound/>
  }
]);

function App() {
  return (
    <div className='bg-zinc-900 w-full min-h-screen text-white font-semibold'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
