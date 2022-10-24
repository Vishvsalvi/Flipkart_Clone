import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { TaskContext } from '../App'

const Orders = () => {

  const { state } = useContext(TaskContext);

  return (
    <div><section className="bg-gray-50">
    <div
      className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div className="mx-auto max-w-xl text-center">
        {/* <h1 className="text-3xl font-extrabold sm:text-5xl">
          
          <strong className="font-extrabold  sm:block">
          
          </strong>
        </h1> */}
  
        <p className="mt-4 sm:text-xl text-green-600 sm:leading-relaxed">
      Dear, {state.user?state.user:"Guest"}   Your Order Is Successfully Placed 
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <NavLink 
            className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            to='/'
          >
           Continue Shopping
          </NavLink>
  
          
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Orders