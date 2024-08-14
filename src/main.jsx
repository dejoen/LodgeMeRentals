import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPageScreen from './features/landingPage/screen/LandingPageScreen.jsx'
 import  {createBrowserRouter, RouterProvider}     from 'react-router-dom'

import AboutPageScreen from './features/landingPage/screen/AboutPageScreen.jsx'

 const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPageScreen/>
    },
    {
      path:'/about',
      element:<AboutPageScreen/>,
      

    }
 ])
 
createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router}/>
    

  </StrictMode>,
)
