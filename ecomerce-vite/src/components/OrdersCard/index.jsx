import { currentDate } from "../../utils"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = (props)=>{
    const {totalPrice,totalProducts} = props
  
    return(
        <div className=" flex justify-between items-center  border border-black rounded-md w-80 p-4 mb-4 dark:text-white dark:border-gray-300 ">
            <p className=" flex justify-between w-full items-center">
                <div className="felx flex-col gap-2">
                    <span className="font-light block">{currentDate()}</span>
                    <span className="font-light block">{totalProducts} articles</span>
                </div>
                <span className="font font-medium text-2xl">${totalPrice}</span>
                <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer dark:text-white" />
            </p>
        </div>
    )
}
export default OrdersCard