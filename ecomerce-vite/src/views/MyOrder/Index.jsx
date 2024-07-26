import { useContext } from "react"
import Layout from "../../components/Layout"
import { ShopingCartContext } from "../../context"
import OrderCard from "../../components/OrderCard"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
function MyOrder() {
  let context = useContext(ShopingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf("/")+1)
  if(index==="last") index=context.order?.length-1
  return (
    <Layout >
      <div className="flex w-80 items-center justify-center relative mb-8">
        <Link to="/MyOrders" className="absolute left-0">
          <ChevronLeftIcon className="w-8 h-8 text-black font-bold cursor-pointer dark:text-white" />
        </Link>
        <h1 className="text-black font-bold text-3xl  dark:text-white">My Order</h1>
      </div>
    
      <div className="overflow-y-auto flex flex-col w-80 ">

      {
          context.order?.[index]?.products.map(product=>(
              <OrderCard
                  id={product.id}
                  key={product.id}
                  title={product.title}
                  imageUrl={product.images}
                  price={product.price}
              />
          ))
      }

      </div>
    </Layout>
  )

}

export default MyOrder