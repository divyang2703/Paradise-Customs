import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#36454f] text-3xl font-bold p-2'>Premium Services</p>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-black'>Fast, flexible, for</p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#36454f]' strings={['Sales', 'Services', 'Modification','Accessories','Restoration']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-[#36454f]'>Where Driving Dreams Are Fulfilled</p>
                <Link to='/services'>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero