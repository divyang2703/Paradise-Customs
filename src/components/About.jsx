import React from 'react'
import Logo from '../assets/logo.jpeg';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 border rounded-3xl md:hover:scale-110 duration-300' src={Logo} alt="logo" />
        <div>
          <p className='text-black font-bold text-6xl'>Paradise Customs</p>
          <h1 className='md:text-4xl sm:text-3xl font-semibold py-2 text-black'>Where Driving Dreams Are Fulfilled</h1>
          <p className='text-black'>Welcome to Paradise Customs, your ultimate destination for all automotive things! As a premier company, we take pride in offering a comprehensive range of services to cater to every aspect of your vehicle ownership journey.</p>
          <p className='text-black'>At Paradise Customs, we are committed to exceeding your expectations with our unparalleled expertise, attention to detail, and a passion for automotive excellence. Join us on this journey of automotive bliss, where your dream becomes a reality.</p>        </div>
      </div>
    </div>
  )
}

export default About