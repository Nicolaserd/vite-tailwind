import {  createContext, useState } from "react";

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) =>{
    const [count,setCount]=useState(0)
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false)
    const openProductDetail = () =>{
        return(setIsProductDetailOpen(true))
    }
    const closeProductDetail = () =>{
        return(setIsProductDetailOpen(false))
    }
    return(
        <ShopingCartContext.Provider value={
            {
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen

            }

        }>
            {children}
        </ShopingCartContext.Provider>
    )
}