import "./styles.css"
import{XMarkIcon} from '@heroicons/react/24/solid'
const ProductDetail = ()=>{
    return(
        <aside className="product-detail flex felx-col fixed bg-white right-0 border border-black rounded-lg dark:bg-gray-700 dark:border-white">
            <div className="flex justify-between items-start w-full p-3">
                <h2 className=" font-medium text-xl text-black dark:text-white"> Detail</h2>
                <XMarkIcon className="w-6 h-6 text-black cursor-pointer dark:text-white"/>

            </div>


        </aside>
    )
}

export default ProductDetail