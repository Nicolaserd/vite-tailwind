import {BrowserRouter, useRoutes} from "react-router-dom"
import Home from "../Home/Index"
import MyAccount from "../MyAccount/Index"
import MyOrder from "../MyOrder/Index"
import NotFound from "../NotFound/Index"
import SingIn from "../SingIn/Index"
import Navbar from "../../components/Navbar/index.jsx"
import { ShopingCartProvider } from "../../context/index.jsx"
import CheckOutShideMenu from "../../components/CheckOutShideMenu/index.jsx"
import MyOrders from "../MyOrders/index.jsx"

const AppRoutes = ()=>{
  let routes = useRoutes(
    [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/Furniture",
      element:<Home/>
    },
    {
      path:"/Shoes",
      element:<Home/>
    },
    {
      path:"/Miscellaneous",
      element:<Home/>
    },
    {
      path:"/Electronics",
      element:<Home/>
    },
    {
      path:"/all",
      element:<Home/>
    },
    {
      path:"/MyAccount",
      element:<MyAccount/>
    },
    {
      path:"/MyOrder",
      element:<MyOrder/>
    },
    {
      path:"/MyOrders/last",
      element:<MyOrder/>
    },
    {
      path:"/MyOrders/:id",
      element:<MyOrder/>
    },
    {
      path:"/MyOrders",
      element:<MyOrders/>
    },
    {
      path:"/*",
      element:<NotFound/>
    },
    {
      path:"/SingIn",
      element:<SingIn/>
    },
    ]
  )
  return routes
}

function App() {
 
  return (
    <ShopingCartProvider>
      <BrowserRouter >
        <Navbar/>
        <CheckOutShideMenu/>
        <AppRoutes/>
      </BrowserRouter>
    </ShopingCartProvider>
  )

}

export default App
