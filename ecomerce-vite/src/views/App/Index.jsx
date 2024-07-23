import {BrowserRouter, useRouter} from "react-router-dom"
import Home from "../Home/Index"
import MyAccount from "../MyAccount/Index"
import MyOrder from "../MyOrder/Index"
import NotFound from "../NotFound/Index"
import SingIn from "../SingIn/Index"

const AppRoutes = ()=>{
  let routes = useRouter(
    [
    {
      path:"/",
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
      path:"/NotFound",
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
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )

}

export default App
