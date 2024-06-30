import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import { Login } from './pages/auth/Login'
import { Layout } from './layout/Layout'
import { AuthLayout } from './layout/AuthLayout'
import { SignUp } from './pages/auth/SignUp'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <App />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
        ],
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    element: <Authentificatoin />,
    children: [
      {
        path: '/signin',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

function Authentificatoin() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
}
