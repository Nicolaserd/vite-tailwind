import Home from "../Home/Index"
import MyAccount from "../MyAccount/Index"
import MyOrder from "../MyOrder/Index"
import NotFound from "../NotFound/Index"
import SingIn from "../SingIn/Index"

function App() {
  return (
    <h1 className="bg-slate-600">
      <Home/>
      <MyAccount/>
      <MyOrder/>
      <NotFound/>
      <SingIn/>
    </h1>
  )

}

export default App
