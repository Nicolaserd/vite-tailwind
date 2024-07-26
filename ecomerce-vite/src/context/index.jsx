import {  createContext, useState } from "react";

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) =>{

    //shopping card
    const [count,setCount]=useState(0)

    // Product detail show product open close
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false)

    //Product detail
    const [productToShow, setProductToShow] = useState({})

    //shoppingcart ADD products to cart
    const [cartProducts, setCartProducts]= useState([])

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
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts
            }

        }>
            {children}
        </ShopingCartContext.Provider>
    )
}