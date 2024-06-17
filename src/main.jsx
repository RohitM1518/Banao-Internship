import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllPosts from './components/AllPosts.jsx';
import { SignInOrUpProvider, useSignInOrUpContext } from "./components/SignInOrUpContext"
import { UserContextProvider } from "./components/UserContext"

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path:'/',
        element:<AllPosts />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <SignInOrUpProvider>
    <RouterProvider router={router} />
    </SignInOrUpProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
