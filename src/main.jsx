import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPageScreen from './features/landingPage/screen/LandingPageScreen.jsx'
 import  {createBrowserRouter, RouterProvider}     from 'react-router-dom'

import AboutPageScreen from './features/landingPage/screen/AboutPageScreen.jsx'
import BlogScreen from './features/landingPage/screen/BlogScreen.jsx'
import PostOne from './features/blogPosts/postOne.jsx'
import PostTwo from './features/blogPosts/PostTwo.jsx'

 const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPageScreen/>
    },
    {
      path:'/about',
      element:<AboutPageScreen/>,
      

    },
    {
      path:'/blog',
      element:<BlogScreen/>,
      children:[
        {
          path:"one",
          element:<PostOne/>
        },
        {
          path:"two",
          element:<PostTwo/>
        }
      ]
    }
 ])
 
createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router}/>
    

  </StrictMode>,
)
