import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
        
      ]
    },
   
  ])
  return (
    <div >
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
