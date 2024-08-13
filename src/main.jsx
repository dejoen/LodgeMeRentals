import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPageScreen from './features/landingPage/screen/LandingPageScreen.jsx'
 import  {createBrowserRouter, RouterProvider}     from 'react-router-dom'

 const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPageScreen/>
    }
 ])
 
createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router}/>
    

  </StrictMode>,
)
