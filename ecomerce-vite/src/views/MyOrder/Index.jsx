import { useContext } from "react"
import Layout from "../../components/Layout"
import { ShopingCartContext } from "../../context"
import OrderCard from "../../components/OrderCard"
function MyOrder() {
  let context = useContext(ShopingCartContext)

  return (
    <Layout >
      MyOrder
      <div className="overflow-y-auto flex flex-col w-80">

      {
          context.order?.slice(-1)[0].products.map(product=>(
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