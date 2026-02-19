import { Copyright, Facebook, Instagram, Twitter, X, Youtube } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
    <div className='bg-black text-white pt-10'>
        <div className='flex flex-col items-center'>
            <div className='flex justify-between gap-64'>
                <div>
                    <h3>Contact Us</h3>
                    <h8 className='font-bold text-xl'>Reybon Pvt. Ltd.</h8>
                    <br/>
                    <h6 className='text-sm'>1563, Aram Bagh, Right Outside Rk <br/>
                        Ashram Marg - 2, Main Bajar Road, <br/>
                        Paharganj, New Delhi, 110055
                    </h6>
                    <h6>Mail: support@reybon.com</h6>
                    <h6>Tel. +91 7042033361</h6>
                    <h6>Hours: Monday to Saturday <br/>
                    <span className="ml-13">10AM to 6PM</span>
                    </h6>
                </div>
                <div>
                    <h3>Customer Services</h3>
                    <div className='flex flex-col gap-0.5'>
                        <NavLink to={"/login"}>Login</NavLink>
                        <NavLink to={"/return"}>Return/Exchange</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to={"/trackorder"}>Track your order</NavLink>
                        <NavLink to="/careers">Careers</NavLink>  
                        <NavLink to="/bulk-purchases">Bulk Purchases</NavLink>
  
                        
                    </div>
                </div>
                <div>
                    <h3>Our Collections</h3>
                    <div className='flex flex-col gap-0.5'>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/newarrivals"}>Best Sellers</NavLink>
                        <NavLink to={"/newarrivals"}>Sports</NavLink>
                        <NavLink to={"/newarrivals"}>Formals</NavLink>
                        <NavLink to={"/newarrivals"}>All Categories</NavLink>
                        <NavLink to="/faqs">FAQs</NavLink>
                    </div>
                </div>
            </div>
            <div className=''>
               
                <div className='flex justify-between'>
                    <NavLink to={'https://x.com/'} className={"h-1 w-1"}><X/></NavLink>
                    <NavLink to={'https://www.instagram.com/'} className={"h-1 w-1"}><Instagram /></NavLink>
                    <NavLink to={'https://www.facebook.com/'} className={"h-1 w-1"}><Facebook /></NavLink>
                    <NavLink to={'https://www.youtube.com/'} className={"h-1 w-1"}><Youtube /></NavLink>
                </div>
                <div className='pt-4'>
                    <div className='flex justify-between gap-1'>
                        <Copyright className={"h-2 w-2"}/>
                        <p className='text-xs'>2026 Reybon. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer