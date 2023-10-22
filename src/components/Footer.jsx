import React from 'react'
import {
    FaFacebookSquare,
    FaPhoneAlt,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#36454f]'>Paradise Customs</h1>
                <p className='py-4'>At Paradise Customs, we are committed to exceeding your expectations with our unparalleled expertise, attention to detail, and a passion for automotive excellence. Join us on this journey of automotive bliss, where your dream car becomes a reality.</p>

                <div className='flex justify-between md:w-[75%] my-6 '>
                    <Link to='https://www.facebook.com/profile.php?id=100095066110634' target='_blank'>
                    <FaFacebookSquare size={25} />
                    </Link>
                    <Link to='https://instagram.com/paradise.customs_?igshid=1k4tq2q0h3q0i'>
                    <FaInstagram size={25} />
                    </Link>
                    <Link to='https://wa.me/917410151213'>
                    <FaWhatsapp size={25} />
                    </Link>
                    <Link to='tel:917410151213'>
                    <FaPhoneAlt size={20} />
                    </Link>
                </div>
            </div>
            <div className='md:col-span-2 flex justify-between mt-6'>
                <div className='mx-auto'>
                    <h6 className='font-medium text-black-400 border-b border-black text-2xl'>Solutions</h6>
                    <ul>
                        <Link to='/services'>
                        <li className='py-2 text-sm'>Services</li>
                        </Link>
                        <Link to='/about'>
                        <li className='py-2 text-sm'>About</li>
                        </Link>
                        <Link to='/contact'>
                        <li className='py-2 text-sm'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className='mx-auto'>
                    <h6 className='font-medium text-black-400 text-2xl border-b border-black'>Head Office</h6>
                    <ul>
                        <li className='py-2 text-sm'>Shop no. 14 ,Mirchandani</li>
                        <li className='py-2 text-sm'>Daffodils, Sun city , Vasai</li>
                        <li className='py-2 text-sm'>West, Vasai-Virar,</li>
                        <li className='py-2 text-sm'>Maharashtra 401202</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Footer