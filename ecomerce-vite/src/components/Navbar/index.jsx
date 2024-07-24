import { NavLink } from "react-router-dom"
import Toggle from "./Buttons"
import { useEffect, useState } from "react"

const Navbar = ()=>{
    const[isToggled,setIsToggled]=useState(false)
    const toggled = () => {
        setIsToggled(prev => !prev);
    };

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
        <nav className=" flex p-4 justify-between items-center text-gray-800 w-full text-xl bg-slate-300 dark:bg-slate-600 dark:text-gray-400">
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
                <NavLink to="/"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                >
                    all
                </NavLink>
            </li>
            <li>
                <NavLink to="/"
                 className={({ isActive }) => 
                    ` ${isActive ? activeStyle : ''} `}
                >
                    toys
                </NavLink>
            </li>
        </ul>

        <ul className="flex w-auto space-x-5">
            <li>
                <NavLink to="/MyOrder"
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

        </ul>
        </nav>
    )
    
    
}

export default Navbar