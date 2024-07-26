import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCard = (props)=>{
    const {id,title,imageUrl,price,handleDelete} = props
    return(
        <div className=" flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">

                </p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium dark:text-gray-300">
                    {price}
                </p>
                <XMarkIcon

                className="w-6 h-6 text-black cursor-pointer dark:text-white"
                onClick={()=>handleDelete(id)}
                
                />
            </div>
        </div>
    )
}
export default OrderCard