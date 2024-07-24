import { useContext } from "react"
import "./styles.css"
import{XMarkIcon} from '@heroicons/react/24/solid'
import { ShopingCartContext } from "../../context"
const ProductDetail = ()=>{
    let context = useContext(ShopingCartContext)
    if(!context.productToShow){
    
        context=null
    }
    
    const parsed= ()=>{
        if (context.productToShow){
            try{
                const parsedImages = JSON.parse(context.productToShow.images[0])
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
    return(
        <aside 
        className={`${context.isProductDetailOpen?"flex":"hidden"} product-detail flex-col fixed bg-white right-0 border border-black rounded-lg dark:bg-gray-700 dark:border-white`}

        >
            <div className="flex justify-between items-start h-auto w-full p-3">
                <h2 className=" font-medium text-xl text-black dark:text-white"> Detail</h2>
                <XMarkIcon 

                className="w-6 h-6 text-black cursor-pointer dark:text-white"
                onClick={()=>context.closeProductDetail()}
                />
            </div>
                <figure className="px-6">
                    <img 
                    className=" w-full h-full rounded-lg"
                    src={parsed()} alt={context.productToShow.title}
                    />
                </figure>
                <p className="flex flex-col p-6">
                    <span className="dark:text-white">{context.productToShow.price}</span>
                    <span className="dark:text-white">{context.productToShow.title}</span>
                    <span className="dark:text-white">{context.productToShow.description}</span>
                </p>



        </aside>
    )
}

export default ProductDetail