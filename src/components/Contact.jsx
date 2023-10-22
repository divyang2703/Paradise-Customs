import React from 'react'
import Logo from '../assets/logo.jpeg'

const Contact = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 rounded-3xl border md:hover:scale-110 duration-300' src={Logo} alt="logo" />
                <div>
                    <p className='text-black font-bold text-6xl'>Paradise Customs</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#36454f]'>Where Driving Dreams Are Fulfilled</h1>
                        <ul className='py-2 text-[#36454f]'>
                            <li className='font-medium text-lg'>OFFICE Number: +917410151213</li>
                            <li className='font-medium text-lg'>Sahil: +917709997861</li>
                            <li className='font-medium text-lg'>Aman: +917757856110</li>
                            <li className='font-medium text-lg'>Email: <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfpJnqzdhBCDRtWbgCCjXGjJmnCpSnPWxgZGcpMDvWtZqBBnvLHmFmTpfnPNBcSdcmsbRL' target='_blank' rel='noreferrer' >paradisecustoms22@gmail.com</a></li>
                            <li className='font-medium text-lg'>Head Office Address: Shop no. 14 ,Mirchandani Daffodils, Sun city , Vasai West, Vasai-Virar, Maharashtra 401202</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact