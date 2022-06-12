import {useNavigate, useParams} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { useContext, useState } from 'react'

function EditPage(props){
    const navigate= useNavigate()
    const {id} = useParams();
    let {authTokens} = useContext(AuthContext)

    const URL = process.env.REACT_APP_YELP_API + "restaurants/"


    let editRestaurant = async(e) => {
        e.preventDefault()
        let response = await fetch(URL+id+'/admin', {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.access}`
            },
            body: JSON.stringify({
                'name': e.target.name.value, 
                'neighborhood': e.target.neighborhood.value,
                'address': e.target.address.value,
                'price': e.target.price.value,
                'image': e.target.image.value,
                'category': e.target.category.value,
                'description': e.target.description.value,

            })
        })
        const data = await response.json()
        if(response.status === 200){
            navigate(-1)
        } else{
            console.log('ERROR')
        }
    }
    return(
        <div>
            <form onSubmit={(e) => editRestaurant(e)}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" required name="name" id="name" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' >
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700"> Neighborhood </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="neighborhood" id="neighborhood" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' >
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700"> Address </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="address" id="address" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' >
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700"> Price </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="price" id="price" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' >
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700"> Restaurant Image </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="image" id="image" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' >
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700"> Category </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="category" id="category" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' >
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700"> Description </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" name="description" id="description" className='w-1000 shadow border rounded focus:outline-none focus:shadow-outline' >
                  </input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="Submit"
        className="group relative w-full flex justify-center
        py-2 px-4 border border-transparent text-sm font-medium
         text-white bg-blue-600 hover:bg-indigo-700"
        />
        </form>
        </div>
    )
}

export default EditPage;