import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="font-rubik bg-gray-700 text-white w-screen h-screen">
      <RouterProvider router={router}/>
    </main>
  </StrictMode>,
)
