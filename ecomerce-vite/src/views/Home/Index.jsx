import { useContext } from "react"
import Card from "../../components/card"
import Layout from "../../components/Layout"
import ProductDetail from "../../components/ProductDetail"
import { ShopingCartContext } from "../../context"

function Home() {
 
  let context = useContext(ShopingCartContext)

  const renderView = ()=>{
    
      if(context.filteredItems?.length>0){
        return(
          context.filteredItems?.map((item)=>(
            <Card
            key={item.id}
            data={item}
            />
          ))
        )
      }
      else{
        
        return (
          <h1 className="text-5xl font-bold absolute top-1/2 right-1/2 dark:text-white mb-9 "> We don´t have anything :(</h1>
        )
      }
    
  }

  return (
    <Layout >
      <h1 className="text-5xl font-bold dark:text-white mb-9"> 
        Products
      </h1>
      <input 
        type="text" 
        placeholder="Search a product"
        className="rounded-lg border border-black  w-80 p-4 mb-4 focus:outline-none text-center dark:border-white dark:text-white dark:bg-gray-700 max-md:w-72"
        onChange={(event)=>context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg max-md:grid-cols-1 max-md:justify-items-center">
        {
          renderView()
        }
      </div>
      <ProductDetail/>
    </Layout>
  )

}

export default Home