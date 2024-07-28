import {  createContext, useEffect, useState } from "react";

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

    //Get products
    const [items,setItems]=useState(null)

    const [filteredItems,setFilteredItems]=useState(null)
    
    

    //Get produts by title
    const [searchByTitle,setSearchByTitle]=useState(null)

    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
          .then(response=>response.json())
          .then(data=>setItems(data))
      },[])

    const filteredItmesByTitle = (items,filteredItems)=>{
        return items?.filter((item)=>item.title.toLowerCase().includes(filteredItems.toLowerCase()))
    }
    //Get produts by CATEGORY
    const [searchByCategory,setSearchByCategory]=useState(null)
       
    const filteredItmesByCategory = (items,searchByCategory)=>{
       
        return(
            items?.filter((item)=>item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
        ) 
    }

    const filterBy = (searchType,items,searchByTitle,searchByCategory) =>{
        if(searchType==="BY_TITLE"){
            return(
                
                filteredItmesByTitle(items,searchByTitle)
            )
        }
        if(searchType==="BY_CATEGORY"){
            
            return(
                filteredItmesByCategory(items,searchByCategory)
            )
        }
        if(searchType==="BY_TITLE_AND_CATEGORY"){
           
            return(
                filteredItmesByCategory(items,searchByCategory).filter(item=>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
            )
        }
        if(!searchType){
            return(
                items
            )
        }

    }
    useEffect(()=>{
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY",items,searchByTitle,searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE",items,searchByTitle,searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY",items,searchByTitle,searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items,searchByTitle,searchByCategory))
      },[items,searchByTitle,searchByCategory])

 


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
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory,
            }

        }>
            {children}
        </ShopingCartContext.Provider>
    )
}