import {useRoutes, BrowserRouter } from'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signln from '../Signln'
import Navbar   from '../../components/Navbar'
import './App.css'
export const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-ordes', element: <MyOrders /> },
    { path: '/sign-in', element: <Signln /> },
    { path: '/*', element: <NotFound /> }
  ]);
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
     <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}


export default App      
