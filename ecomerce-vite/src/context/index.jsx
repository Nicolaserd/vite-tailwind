import {  createContext } from "react";

const ShopingCarContext = createContext()

export const ShopingCarProvider = ({children}) =>{
    return(
        <ShopingCarContext.Provider>
            {children}
        </ShopingCarContext.Provider>
    )
}