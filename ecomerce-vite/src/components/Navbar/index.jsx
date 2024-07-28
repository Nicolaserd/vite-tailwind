import { NavLink } from "react-router-dom"
import Toggle from "./Buttons"
import { useContext, useEffect, useState } from "react"
import{ShoppingCartIcon} from '@heroicons/react/24/solid'
import { ShopingCartContext } from "../../context"

const Navbar = ()=>{
    const context = useContext(ShopingCartContext)
    const[isToggled,setIsToggled]=useState(false)
    const toggled = () => {
        setIsToggled(prev => !prev);
    };

   
    useEffect(() => {
        const currentPath = window.location.pathname
        let index = currentPath.substring(currentPath.lastIndexOf("/")+1)
        context.setSearchByCategory(index)
    }, []);

    useEffect(() => {
        if (isToggled) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('bg-gray-800');
            document.body.classList.remove('bg-white');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-gray-800');
        }
    }, [isToggled]);

    const activeStyle ="underline underline-offset-4"

    return(
        <nav className=" flex p-4 justify-between items-center text-gray-800 w-full text-xl bg-slate-300 dark:bg-slate-600 dark:text-gray-400 fixed top-0 z-30">
        <ul className="flex w-auto space-x-5">
            <li>
                <NavLink to="/" 
                    className={({ isActive }) => 
                            `font-bold ${isActive ? activeStyle : ''} dark:text-white`}
                >
                    Shopei
                </NavLink>
            </li>
            <li>
                <NavLink to="/all"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                 onClick={()=>context.setSearchByCategory()}
                >
                    all
                </NavLink>
            </li>
            <li>
                <NavLink to="/Furniture"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                 onClick={()=>context.setSearchByCategory("Furniture")}
                >
                    Furniture
                </NavLink>
            </li>
            <li>
                <NavLink to="/Shoes"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                 onClick={()=>context.setSearchByCategory("Shoes")}
                >
                    Shoes
                </NavLink>
            </li>
            <li>
                <NavLink to="/Miscellaneous"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                 onClick={()=>context.setSearchByCategory("Miscellaneous")}
                >
                    Miscellaneous
                </NavLink>
            </li>
            <li>
                <NavLink to="/Electronics"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                 onClick={()=>context.setSearchByCategory("Electronics")}
                >
                    Electronics
                </NavLink>
            </li>
        </ul>

        <ul className="flex w-auto space-x-5">
            <li>
                <NavLink to="/MyOrders"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                >
                    Orders
                </NavLink>
            </li>
            <li>
                <NavLink to="/MyAccount"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                
                >
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to="/SingIn"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                >
                    Sing In
                </NavLink>
            </li>
            <li>
               <Toggle
                toggled={toggled}
                toggle ={isToggled} 
               />

           
            </li>
            <li className="flex items-center gap-3 justify-center dark:text-white relative">
              <ShoppingCartIcon className="w-6 h-6 self-center justify-self-center text-gray-500 cursor-pointer dark:text-white"/>
              <span className={`flex absolute left-4 -top-2 bg-gray-400 text-green-700 font-semibold text-sm rounded-full w-4 h-4 justify-center items-center ${context.count===0?"hidden":"flex"} dark:text-white`}>
                {context.count}
              </span>
           
            </li>

        </ul>
        </nav>
    )
    
    
}

export default Navbar