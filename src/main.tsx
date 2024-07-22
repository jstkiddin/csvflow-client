import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/home/Home'
import { Login } from './pages/auth/Login'
import { Layout } from './layout/Layout'
import { AuthLayout } from './layout/AuthLayout'
import { SignUp } from './pages/auth/SignUp'
import NotFound from './pages/NotFound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import store, { useAppDispatch } from './app'
import { Provider } from 'react-redux'
import { useCurrentUser } from './app/services/user/user.service'
import { Loader } from './components/loader/Loader'
import { setUser } from './app/reducers/user.slice'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
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
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function ProtectedRoutes() {
  const auth = useAuth()
  const dispatch = useAppDispatch()

  if (auth.isAuthenticated) {
    const { data, isLoading, isError, isSuccess } = useCurrentUser()

    useEffect(() => {
      isSuccess && dispatch(setUser(data))
      console.log('data', data)
    }, [isSuccess])

    if (isLoading) {
      return <Loader />
    }

    return (
      <Layout>
        <Navigate to="/" />
        <Outlet />
      </Layout>
    )
  } else {
    return (
      <AuthLayout>
        <Navigate to="/signin" />
        <Outlet />
      </AuthLayout>
    )
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
          </ChakraProvider>
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  )
}
