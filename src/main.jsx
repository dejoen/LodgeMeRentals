import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingPageScreen from "./features/landingPage/screen/LandingPageScreen.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPageScreen from "./features/landingPage/screen/AboutPageScreen.jsx";
import BlogScreen from "./features/landingPage/screen/BlogScreen.jsx";

import PostTwo from "./features/blogPost/PostTwo.jsx";
import PostOne from "./features/blogPost/PostOne.jsx";
import CopyRightScreen from "./features/landingPage/screen/CopyRightScreen.jsx";
import TermsAndConditionScreen from "./features/landingPage/screen/TermsAndConditionScreen.jsx";
import ResourcesScreen from "./features/landingPage/screen/ResourcesScreen.jsx";
import FAQScreen from "./features/landingPage/screen/FAQScreen.jsx";
import AgentRegistrationScreen from "./features/userRegistrationPage/screen/AgentRegistrationScreen.jsx";

import LoginScreen from "./features/login/screen/LoginScreen.jsx";
import ClientRegistrationScreen from "./features/userRegistrationPage/screen/ClientRegistrationScreen.jsx";
import AgentDashBoardScreen from "./features/dashBoard/screen/agent/AgentDashBoardScreen.jsx";
import AgentDashboardView from "./features/dashBoard/screen/agent/AgentDashBoardView.jsx";
import AgentMessageView from "./features/dashBoard/screen/agent/AgentMessageView.jsx";
import ClientDashBoardScreen from "./features/dashBoard/screen/client/ClientDashBoardScreen.jsx";

import CombineContextProvider from "./context/CombineContextProvider.jsx";
import PublishHouseScreen from "./features/dashBoard/screen/agent/publishHouse/PublishHouseScreen.jsx";
import HouseOverViewScreen from "./features/dashBoard/screen/agent/publishHouse/HouseOverviewScreen.jsx";
import AboutHouse from "./features/dashBoard/screen/agent/publishHouse/AboutHouse.jsx";
import HouseFeatures from "./features/dashBoard/screen/agent/publishHouse/HouseFeatures.jsx";
import MediaUpload from "./features/dashBoard/screen/agent/publishHouse/MediaUpload.jsx";
import RentalPrice from "./features/dashBoard/screen/agent/publishHouse/RentalPrice.jsx";
import MarketInsight from "./features/dashBoard/screen/agent/marketInsight/MarketInsight.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageScreen />
  },
  {
    path: "/about",
    element: <AboutPageScreen />
  },
  {
    path: "/blog",
    element: <BlogScreen />,
    children: [
      {
        path: "one",
        element: <PostOne />
      },
      {
        path: "two",
        element: <PostTwo />
      }
    ]
  },
  {
    path: "/copyrights",
    element: <CopyRightScreen />
  },
  {
    path: "/terms",
    element: <TermsAndConditionScreen />
  },
  {
    path: "/resources",
    element: <ResourcesScreen />
  },
  {
    path: "/faq",
    element: <FAQScreen />
  },
  {
    path: "/register-as-agent",
    element: (
      <CombineContextProvider>
        <AgentRegistrationScreen />
      </CombineContextProvider>
    )
  },
  {
    path: "/register-as-client",

    element: (
      <CombineContextProvider>
        <ClientRegistrationScreen />
      </CombineContextProvider>
    )
  },
  {
    path: "/agent/",
    element: (
      <CombineContextProvider>
        <AgentDashBoardScreen />
      </CombineContextProvider>
    ),
    children: [
      {
        path: "dashboard",
        element: <AgentDashboardView />
      },
      {
        path: "dashboard/publish-home",
        element: <PublishHouseScreen />,
        children: [
          {
            path: "houseOverview",
            element: <HouseOverViewScreen />
          },
          {
            path: "aboutHouse",
            element: <AboutHouse />
          },
          {
            path: "houseFeatures",
            element: <HouseFeatures />
          },
          {
            path: "mediaUpload",
            element: <MediaUpload />
          },
          {
            path: "rentalPrice",
            element: <RentalPrice />
          }
        ]
      },

      {
        path: "dashboard/market-insights",
        element: <MarketInsight />
      },

      {
        path: "message",
        element: <AgentMessageView />
      }
    ]
  },
  {
    path: "/login",

    element: (
      <CombineContextProvider>
        <LoginScreen />
      </CombineContextProvider>
    )
  },
  {
    path: "/client/dashboard",
    element: (
      <CombineContextProvider>
        <ClientDashBoardScreen />
      </CombineContextProvider>
    )
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
