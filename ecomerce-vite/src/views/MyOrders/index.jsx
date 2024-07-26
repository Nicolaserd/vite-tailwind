import { useContext } from "react"
import {Link} from "react-router-dom"
import Layout from "../../components/Layout"
import OrdersCard from "../../components/OrdersCard"
import { ShopingCartContext } from "../../context"


function MyOrders() {
  let context = useContext(ShopingCartContext)

  return (
    <Layout>
      
        <h1 className="text-black font-bold text-3xl mb-10 dark:text-white">My Orders</h1>
     
      {
        context.order.map((order,index)=>(
          <Link key={index} to={`/MyOrders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>

        ))
      }
    </Layout>
  )

}

export default MyOrders