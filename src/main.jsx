import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import {ClerkProvider} from '@clerk/clerk-react'
import AddProduct from './Admin/AddProduct'
import AdminProfile from './Admin/AdminProfile'
import SearchByCategory from './Search/[category]'
import SearchByOptions from './Search'
import ItemDetails from './item-details/[id]'
import Category from './components/Category'
import Footer from './components/Footer'
import Cart from './components/Cart'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/AdminProfile',
    element: <AdminProfile />,
  },
  {
    path: '/AddProduct',
    element: <AddProduct />,
  },
  {
    path: '/Search/:category',
    element: <SearchByCategory />,
  },
  {
    path: '/Search',
    element: <SearchByOptions />,
  },
  {
    path: '/item-details/:id',
    element: <ItemDetails />,
  },
  {
    path: '/category',
    element: <Category />,
  },
  {
    path: '/aboutus',
    element: <Footer />,
  },
  {
    path: '/Cart',
    element: <Cart />,
  }

])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
    

  </StrictMode>,
)
