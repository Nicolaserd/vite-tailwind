import { useContext } from "react"
import { ShopingCartContext } from "../../context"


const Card = ({data})=>{

    const parsed= ()=>{
        if (data?.images){
            try{
                const parsedImages = JSON.parse(data?.images[0])
                return(parsedImages[0])
            }
            catch{
                return(null)
            }
            
        }
        else{
            return(null)
        }
       
    }
    const imageUrl = parsed();

    if (!data || !data.title || !imageUrl) {
        return null; 
    }
   
   const context = useContext(ShopingCartContext)

   const showProduct = (ProductDetail) =>{
        context.openProductDetail()
        context.setProductToShow(ProductDetail)
   }
   const addProductsToCart = (productData)=>{
    context.setCount(context.count + 1)
    context.serCartProducts([...context.cartProducts,productData])
   }

   
   return(
        <div 
        className="bg-transparent cursor-pointer w-56 h-60"
        onClick={()=>showProduct(data)}
        >
            <figure className="relative mb-4 w-full h-4/5">
                <span className="absolute bottom-1 left-1  rounded-2xl bg-white/60 text-black text-sm p-2 font-semibold dark:text-white dark:bg-black/60">{data?.category?.name} </span>
                <img className="w-full h-full object-cover rounded-lg" src={parsed()} alt={data?.title} />
                <div className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full dark:bg-gray-900 dark:text-white"
                    onClick={()=>addProductsToCart(data)}
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