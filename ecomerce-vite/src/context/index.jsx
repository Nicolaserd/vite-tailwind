import {  createContext, useState } from "react";

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) =>{

    //shopping card
    const [count,setCount]=useState(0)

    // Product detail show product open close
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false)
    
    const openProductDetail = () =>{
        return(setIsProductDetailOpen(true))
    }
    const closeProductDetail = () =>{
        return(setIsProductDetailOpen(false))
    }
    //Product detail
    const [productToShow, setProductToShow] = useState({})
    
    // check out side menu show product open close
    const [isCeckOutOpen,setIsCheckOutOpen] = useState(false)
    
    const openCheckOut = () =>{
        return(setIsCheckOutOpen(true))
    }
    const closeCheckOut = () =>{
        return(setIsCheckOutOpen(false))
    }
    
 

    //shoppingcart ADD products to cart
    const [cartProducts, setCartProducts]= useState([])

    //cart order
     const [order,setOrder]=useState([])


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
                setCartProducts,
                isCeckOutOpen,
                openCheckOut,
                closeCheckOut,
                order,
                setOrder,
            }

        }>
            {children}
        </ShopingCartContext.Provider>
    )
}