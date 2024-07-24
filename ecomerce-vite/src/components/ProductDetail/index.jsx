import { useContext } from "react"
import "./styles.css"
import{XMarkIcon} from '@heroicons/react/24/solid'
import { ShopingCartContext } from "../../context"
const ProductDetail = ()=>{
    const context = useContext(ShopingCartContext)
    return(
        <aside 
        className={`${context.isProductDetailOpen?"flex":"hidden"} product-detail  felx-col fixed bg-white right-0 border border-black rounded-lg dark:bg-gray-700 dark:border-white`}

        >
            <div className="flex justify-between items-start w-full p-3">
                <h2 className=" font-medium text-xl text-black dark:text-white"> Detail</h2>
                <XMarkIcon 

                className="w-6 h-6 text-black cursor-pointer dark:text-white"
                onClick={()=>context.closeProductDetail()}
                />

            </div>


        </aside>
    )
}

export default ProductDetail