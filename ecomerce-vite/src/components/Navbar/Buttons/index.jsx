import "./index.css"
import{MoonIcon} from '@heroicons/react/24/solid'
import{SunIcon} from '@heroicons/react/24/solid'
const Toggle = ({toggled,toggle})=>{
    return(
        <button 
        className=" w-16 h-8 bg-gray-200 rounded-3xl relative border border-solid border-black dark:bg-gray-800 "
        onClick={toggled}
        >
            <MoonIcon 
            className={`w-6 h-6 translate-x-1  rounded-full absolute -translate-y-1/2 text-blue-600 dark:hidden `}/>
            <SunIcon
            className={`w-6 h-6 translate-x-1  rounded-full absolute -translate-y-1/2 hidden dark:block dark:text-yellow-600 ${toggle ? "translate-x-9" : ""}`}
            />
        
        </button>
    )
}
export default Toggle