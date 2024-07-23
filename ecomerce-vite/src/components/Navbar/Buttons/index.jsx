import "./index.css"
const Toggle = ({toggled,toggle})=>{
    return(
        <button 
        className=" w-16 h-8 bg-gray-200 rounded-3xl relative border border-solid border-black dark:bg-gray-800 "
        onClick={toggled}
        >
            <div 
             className={`w-6 h-6 translate-x-1 bg-emerald-500 rounded-full absolute -translate-y-1/2 dark:bg-yellow-400 ${toggle ? "translate-x-9" : ""}`}
            >

            </div>
        </button>
    )
}
export default Toggle