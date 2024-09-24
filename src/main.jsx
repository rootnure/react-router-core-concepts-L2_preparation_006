import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello from react router</div>,
    errorElement: <div>Oops... Sorry...</div>
  },
  {
    path: '/about',
    element: <div>I am in the about page</div>
  },
  {
    path: '/contact',
    element: <div>Contact me now</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
