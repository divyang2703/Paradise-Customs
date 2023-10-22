import React from 'react'
import { Link } from 'react-router-dom'

import Accessories from '../assets/accessories.jpeg'
import Sales from '../assets/Carsales.jpg'
import Services from '../assets/carservice.png'
import Restoration from '../assets/carrestoration.jpg'
import Modification from '../assets/modification.jpeg'
import Power from '../assets/powerupgrade.jpeg'
import Paint from '../assets/carpaint.jpeg'
import Wrap from '../assets/carwrap.jpeg'
import Door from '../assets/doostepservice.jpeg'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-black px-5  py-10 ease-in-out duration-300 transition-all'>
      {/* #1 */}
    <div className='justify-center py-4 px-9 mx-auto w-full border rounded-3xl md:hover:scale-105 duration-300' >
        <h6 className='text-xl font-semibold flex justify-center py-2'>Sales</h6>
        <img className='w-[400px] h-[300px] border rounded-3xl md: shadow-black py-2' src={Sales} alt="/" />
        <p className='p-2 mt-2'>A one-stop destination for all your automotive needs, offering a wide range of vehicles for sale </p>
        <Link to='https://wa.me/917410151213' target='_blank'>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
        </Link>
    </div>
    <div className='justify-center py-4 px-9 mx-auto w-full border rounded-3xl md:hover:scale-105 duration-300'>
        <h6 className='text-xl font-semibold flex justify-center py-2'>Services</h6>
        <img className='w-[500px] h-[275px] rounded-3xl md:shadow-black py-2 border' src={Services} alt="/" />
        <p className='p-2 mt-2'>A one-stop destination for all your automotive needs, offering a wide range of vehicle top-notch repair services to keep your car running smoothly.</p>
        <Link to='https://wa.me/917410151213' target='_blank'>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
        </Link>

    </div>
    <div className='justify-center w-full py-4 px-9 mx-auto border rounded-3xl md:hover:scale-105 duration-300 '>
        <h6 className='text-xl font-semibold flex justify-center py-2'>Restoration</h6>
        <img className='w-[500px] h-[275px] rounded-3xl py-4' src={Restoration} alt="/" />
        <p className='p-2 mt-2'>Car restoration refers to the process of carefully repairing and renewing an old or classic car to bring it back to its original condition or close to how it looked and functioned when it was first manufactured. It involves repairing or replacing worn-out parts, repainting the exterior, and refurbishing the interior to revive the car's beauty and functionality. </p>
        <Link to='https://wa.me/917410151213' target='_blank'>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
        </Link>
    </div>
      {/* #2 */}
    <div className='justify-center py-4 px-9 mx-auto w-full border rounded-3xl md:hover:scale-105 duration-300' >
        <h6 className='text-xl font-semibold flex justify-center py-2'>Modification</h6>
        <img className='w-[500px] h-[275px] rounded-3xl md: shadow-black py-2 border' src={Modification} alt="/" />
        <p className='p-2 mt-2'>Unlock your car's true potential with expert modification services, tailored to enhance performance and deliver an exhilarating driving experience. </p>
        <Link to='https://wa.me/917410151213' target='_blank'>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
        </Link>
    </div>
    <div className='justify-center py-4 px-9 mx-auto w-full border rounded-3xl md:hover:scale-105 duration-300'>
        <h6 className='text-xl font-semibold flex justify-center py-2'>Power Upgrades</h6>
        <img className='w-[500px] h-[275px] rounded-3xl md:shadow-black py-2' src={Power} alt="/" />
        <p className='p-2 mt-2'> Unlock your car's true potential with expert power upgrades, tailored to enhance performance and deliver an exhilarating driving experience.</p>
        <Link to='https://wa.me/917410151213' target='_blank'>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
        </Link>

    </div>
    <div className='justify-center w-full py-4 px-9 mx-auto border rounded-3xl md:hover:scale-105 duration-300 '>
        <h6 className='text-xl font-semibold flex justify-center py-2'>Car Paint</h6>
        <img className='w-[500px] h-[275px] rounded-3xl py-4 border' src={Paint} alt="/" />
        <p className='p-2 mt-2'>Transform your vehicle's appearance with premium car paint finishes and eye-catching wraps, providing a fresh look and protecting the original paintwork.</p>
        <Link to='https://wa.me/917410151213' target='_blank'> 
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
        </Link>
    </div>
      {/* #3 */}
      <div className='justify-center py-4 px-9 mx-auto w-full border rounded-3xl md:hover:scale-105 duration-300' >
        <h6 className='text-xl font-semibold flex justify-center py-2'>Detailing/Wraps</h6>
        <img className='w-[500px] h-[275px] rounded-3xl md: shadow-black py-2 border' src={Wrap} alt="/" />
        <p className='p-2 mt-2'>Car wrapping is a professional automotive service that involves applying a specialized vinyl film to the exterior surface of a vehicle. This vinyl film serves as a durable and protective layer, preserving the original paintwork while allowing for customization with a variety of designs, colors, and textures.</p>
        <Link to='https://wa.me/917410151213' target='_blank'>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
        </Link>
    </div>
    <div className='justify-center py-4 px-9 mx-auto w-full border rounded-3xl md:hover:scale-105 duration-300'>
        <h6 className='text-xl font-semibold flex justify-center py-2'>DoorStep Services</h6>
        <img className='w-[500px] h-[275px] rounded-3xl md:shadow-black py-2' src={Door} alt="/" />
        <p className='p-2 mt-2'>onvenience at your doorstep - professional car services and repairs brought directly to you, ensuring your car stays in optimal condition without the hassle of visiting a workshop.</p>
        <Link to='https://wa.me/917410151213' target='_blank'>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
        </Link>

    </div>
    <div className='justify-center w-full py-4 px-9 mx-auto border rounded-3xl md:hover:scale-105 duration-300 '>
        <h6 className='text-xl font-semibold flex justify-center py-2'>Accessories</h6>
        <img className='w-[500px] h-[275px] rounded-3xl py-4 border' src={Accessories} alt="/" />
        <p className='p-2 mt-2'>Car and bike accessories are additional items or components that can be installed or added to vehicles to enhance their functionality, appearance, and overall user experience. These accessories may include things like stylish seat covers, convenient phone holders, performance-enhancing exhaust systems, upgraded headlights, or decorative decals, among many others. They offer owners the opportunity to personalize and optimize their vehicles according to their preferences and needs.</p>
        <Link to='https://wa.me/917410151213' target='_blank'>         
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
        </Link>
    </div>
</div>



  )
}

export default Cards