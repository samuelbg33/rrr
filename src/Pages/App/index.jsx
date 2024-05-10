import {useRoutes, BrowserRouter } from'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signln from '../Signln'
import Navbar   from '../../components/Navbar'
import CheckoutSideMenu from '../../components/ChekoutSideMenu'
import './App.css'
import { ShoppingCartProvider } from '../../components/Context'

export const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-ordes', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/sign-in', element: <Signln /> },
    { path: '/*', element: <NotFound /> }
  ]);
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
     </BrowserRouter>
    </ShoppingCartProvider>
  
  )
}


export default App      
