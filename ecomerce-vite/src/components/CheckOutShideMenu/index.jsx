import { useContext } from "react"
import {Link} from "react-router-dom"
import "./styles.css"
import{XMarkIcon} from '@heroicons/react/24/solid'
import { ShopingCartContext } from "../../context"
import OrderCard from "../OrderCard"
import { sumaProductos } from "../../utils"

const CheckOutShideMenu = ()=>{

    let context = useContext(ShopingCartContext)
    const handleDelete = (id) =>{
        const newProducts = context.cartProducts.filter(product=>product.id !== id)
        context.setCartProducts(newProducts)
    }
    const handleCheckout = ()=>{
        
        const orderToAdd = {
            date: new Date(),
            products:context.cartProducts,
            totalProducts:context.cartProducts.length,
            totalPrice: sumaProductos(context.cartProducts)
        }

        context.setOrder([...context.order,orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }
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
            <div className="px-6 overflow-y-auto flex-1">

            {
                context.cartProducts.map(product=>(
                    <OrderCard
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}

                    />
                ))
            }

            </div>
            <div className="px-6 mb-6 ">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-medium dark:text-gray-400">Total</span>
                    <span className="font-semibold text-2xl text-black dark:text-white">${sumaProductos(context.cartProducts)}</span>
                </p>
                <Link to="/MyOrders/last">
                    <button
                    className="bg-black py-3 text-white w-full rounded-lg"
                    onClick={()=>handleCheckout()}

                    >
                        Checkout
                    </button>
                </Link>
            </div>
                
        </aside>
    )
}

export default CheckOutShideMenu