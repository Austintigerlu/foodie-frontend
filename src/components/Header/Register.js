import {Link, useNavigate, Navigate} from 'react-router-dom';
import{useEffect, useState, useContext} from 'react';
import AuthContext from '../../context/AuthContext'

function Register(props) {
    let {registerUser} = useContext(AuthContext)
    return (
<div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Create Account</h1>
          <Link to="/login" className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">or login here</p>
          </Link>
          <form className="mt-8 space-y-6" onSubmit={registerUser}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only" htmlFor="name">First Name: </label>
                <input 
                  id='first_name'  
                  required 
                  type="first_name" 
                  placeholder='First Name'
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="name">Last Name: </label>
                <input 
                  id='last_name'  
                  required 
                  type="last_name" 
                  placeholder='Last Name'
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="username">Username: </label>
                <input 
                  id="username" 
                  required 
                  type="username" 
                  placeholder='Username'
                  className="appearance-none rounded-none relative block
                    w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-b-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">Email: </label>
                <input 
                  id="email" 
                  required 
                  type="email" 
                  placeholder='Email'
                  className="appearance-none rounded-none relative block
                    w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-b-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">Password: </label>
                <input 
                  id="password" 
                  required 
                  type="password" 
                  placeholder='Password'
                  className="appearance-none rounded-none relative block
                    w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-b-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className='flex justify-center items-center mt-6'>
              <button
                type="submit" 
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >Create Account</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;