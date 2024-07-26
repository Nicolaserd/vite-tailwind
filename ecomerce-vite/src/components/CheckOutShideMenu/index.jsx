import { useContext } from "react"
import "./styles.css"
import{XMarkIcon} from '@heroicons/react/24/solid'
import { ShopingCartContext } from "../../context"
import OrderCard from "../OrderCard"
const CheckOutShideMenu = ()=>{
    let context = useContext(ShopingCartContext)
    
    console.log(context.cartProducts)
    return(
        <aside 
        className={`${context.isCeckOutOpen?"flex":"hidden"} check-out-side-menu  flex-col fixed bg-white right-0 border border-black rounded-lg z-40 dark:bg-gray-700 dark:border-white`}

        >
            <div className="flex justify-between items-start h-auto w-full p-3">
                <h2 className=" font-medium text-xl text-black dark:text-white"> My Order</h2>
                <XMarkIcon 

                className="w-6 h-6 text-black cursor-pointer dark:text-white"
                onClick={()=>context.closeCheckOut()}
                />
            </div>
            <div className="px-6">

            {
                context.cartProducts.map(product=>(
                    <OrderCard
                        key={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}

                    />
                ))
            }
            
            </div>
                
        </aside>
    )
}

export default CheckOutShideMenu