import React from 'react'
import Cards from './Cards'
import {
  FcServices
} from 'react-icons/fc';

const Services = () => {
  return (
    <div className='text-black'>
        <div className=' mx-width-auto'>
            <h1 className='text-4xl flex justify-center items-center'><FcServices size={30}></FcServices>Services</h1>
            <Cards/>
        </div>
    </div>
  )
}

export default Services