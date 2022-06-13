import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

function PageButtons(){
    let {search, location, page, setPage, pageAmmount} = useContext(AuthContext)

    return(pageAmmount>1 && (
        <div>
        {[...Array(pageAmmount).keys()].map((x)=>{
            return(
            <Link 
                key={x+1}
                to={`/search?find_desc${search}&find_loc=${location}&page=${x+1}`}
            >
                <button onClick={()=>setPage(x+1)} className={`${page === x+1 ? 'bg-whiteborder-gray-300': 'bg-indigo-50'} text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}> {x+1} </button>
            </Link>
            )
        })}
        </div>
    )
    )
}

export default PageButtons