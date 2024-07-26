import { useContext } from "react"
import { ShopingCartContext } from "../../context"


const Card = ({data})=>{
    const imgGenerica = "data:image/jpeg;base64,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"
    const img= ()=>{
        if (data?.images && data.images[0][0] !== "["){
            
           return(data?.images[0])
        }
        else{
            data.images [0] = imgGenerica;
            return(imgGenerica)
        }
       
    }
  

    if (!data || !data.title ) {
        return null; 
    }
   
   const context = useContext(ShopingCartContext)

   const showProduct = (ProductDetail) =>{
        context.openProductDetail()
        context.setProductToShow(ProductDetail)
   }
   const addProductsToCart = (event,productData)=>{
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts,productData])
    context.openCheckOut()
    context.closeProductDetail()
    console.log(context.cartProducts)
   }

   
   return(
        <div 
        className="bg-transparent cursor-pointer w-56 h-60"
        onClick={()=>showProduct(data)}
        >
            <figure className="relative mb-4 w-full h-4/5">
                <span className="absolute bottom-1 left-1  rounded-2xl bg-white/60 text-black text-sm p-2 font-semibold dark:text-white dark:bg-black/60">{data?.category?.name} </span>
                <img className="w-full h-full object-cover rounded-lg" src={img()} alt={data?.title} />
                <div className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full dark:bg-gray-900 dark:text-white"
                    onClick={(event)=>addProductsToCart(event,data)}
                >
                    +
                </div>       
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light dark:text-white">{data?.title}</span>
                <span className="text-lg font-medium dark:text-white">{data?.price}</span>
            </p>
        </div>
    )
}
export default Card