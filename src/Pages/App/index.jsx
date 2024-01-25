import {useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import Navbar from '../../Components/NavBar'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sign-in', element: <Signin/>},
    {path: '/*', element: <NotFound/>},

  ])
  return routes
}

function App() {

 
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
        </BrowserRouter>
      </ShoppingCartProvider>

    </>
  )
}

export default App
