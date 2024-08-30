import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPageScreen from './features/landingPage/screen/LandingPageScreen.jsx'
 import  {createBrowserRouter, RouterProvider}     from 'react-router-dom'

import AboutPageScreen from './features/landingPage/screen/AboutPageScreen.jsx'
import BlogScreen from './features/landingPage/screen/BlogScreen.jsx'

import PostTwo from './features/blogPost/PostTwo.jsx'
import PostOne from './features/blogPost/PostOne.jsx'
import CopyRightScreen from './features/landingPage/screen/CopyRightScreen.jsx'
import TermsAndConditionScreen from './features/landingPage/screen/TermsAndConditionScreen.jsx'
import ResourcesScreen from './features/landingPage/screen/ResourcesScreen.jsx'
import FAQScreen from './features/landingPage/screen/FAQScreen.jsx'
import AgentRegistrationScreen from './features/userRegistrationPage/screen/AgentRegistrationScreen.jsx'

import LoginScreen from './features/login/screen/LoginScreen.jsx'
import ClientRegistrationScreen from './features/userRegistrationPage/screen/ClientRegistrationScreen.jsx'
import AgentDashBoardScreen from './features/dashBoard/screen/agent/AgentDashBoardScreen.jsx'
import AgentDashboardView from './features/dashBoard/screen/agent/AgentDashBoardView.jsx'
import AgentMessageView from './features/dashBoard/screen/agent/AgentMessageView.jsx'
import ClientDashBoardScreen from './features/dashBoard/screen/client/ClientDashBoardScreen.jsx'
import ClientHouseCardContainerView from './features/dashBoard/screen/client/ClientHouseCardContainerView.jsx'

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
    },
    {
      path:'/copyrights',
      element:<CopyRightScreen/>
    },
    {
      path:'/terms',
      element:<TermsAndConditionScreen/>
    },
    {
      path:'/resources',
      element:<ResourcesScreen/>
    },
    {
      path:'/faq',
      element:<FAQScreen/>
    },
    {
      path:'/register-as-agent',
      element:<AgentRegistrationScreen/>
    },
    {
      path:'/register-as-client',
      element:<ClientRegistrationScreen/>
    },
    {
      path:"/",
      element:<AgentDashBoardScreen/>,
      children:[
        {
          path:'agent/dashboard',
          element:<AgentDashboardView/>
        },
        {
          path:'agent/message',
          element:<AgentMessageView/>
          
        }
      ]
    },
    {
      path:'/login',
      element:<LoginScreen/>
    },
    {
      path:'/client/dashboard',
      element:<ClientDashBoardScreen/>,
      children:[
        {
          path:'page/:currentPage',
           element:<ClientHouseCardContainerView/>
        }
      ]
    }
 ])
 
createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router}/>
    

  </StrictMode>,
)
