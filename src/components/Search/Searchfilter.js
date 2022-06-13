import React from "react"

function SearchFilter(props){
    const search=props.search
    const location = props.location


    return(
        <div>
            <div className="mt-5 flex justify-center">
                <h1 className="text-3xl font-semibold">Searching for {!search ? 'Anything': search} in {!location ? 'Anywhere': location}</h1>

            </div>
            <div className="flex justify-center mt-5">
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-md py-2 px-4 rounded-lg mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </button>
                <div className="inline-flex">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-md py-2 px-4 rounded-l">
                    $
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-md py-2 px-4 ">
                    $$
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-md py-2 px-4">
                    $$$
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-md py-2 px-4 rounded-r">
                    $$$$
                    </button>
                </div>
                <button type="button" className="flex bg-gray-300 hover:bg-gray-400 text-gray-800 font-md py-2 px-4 rounded-lg ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Open Now
                </button>
            </div>
        </div>
    )
}


export default SearchFilter;