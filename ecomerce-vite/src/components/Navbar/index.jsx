import { NavLink } from "react-router-dom"

const Navbar = ()=>{
    return(
        <nav className=" flex p-4 justify-between items-center text-gray-800 w-full text-xl">
        <ul className="flex w-auto space-x-5">
            <li>
                <NavLink to="/" className="font-bold">
                    Shopei
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                    all
                </NavLink>
            </li>
            <li>
                <NavLink to="toys">
                    toys
                </NavLink>
            </li>
        </ul>

        <ul className="flex w-auto space-x-5">
            <li>
                <NavLink to="/MyOrder">
                    Orders
                </NavLink>
            </li>
            <li>
                <NavLink to="/MyAccount">
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to="/SingIn">
                    Sing In
                </NavLink>
            </li>
        </ul>
        </nav>
    )
    
    
}

export default Navbar