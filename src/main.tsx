import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root/index.tsx';
import Providers from './assets/components/Providers.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Providers>
    <RouterProvider router={router} />
  </Providers> 
)
