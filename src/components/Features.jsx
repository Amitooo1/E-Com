import { Award, Headset, PackageOpen, TruckElectric } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
    <div className='flex justify-between gap-10 items-center px-10 pb-25 pt-10'>
        <div className='flex flex-col items-center text-center'>
            <div className=''>
                <PackageOpen className='w-14 h-14' />
            </div>
            <div className='pt-4'>
                <h4 className='font-bold'>EASY RETURN <br /> AND EXCHANGE</h4>
                <h8>7 Days Easy Return And Exchange</h8>
            </div>
        </div>
        <div className='flex flex-col items-center text-center'>
            <div className=''>
                <TruckElectric className='w-14 h-14' />
            </div>
            <div className='pt-4'>
                <h4 className='font-bold'>FAST DELIVERY<br /> <br /></h4>
                <h8>48-hour delivery in all major cities</h8>
            </div>
        </div>
        <div className='flex flex-col items-center text-center'>
            <div className=''>
                <Headset className='w-14 h-14'/>
            </div>
            <div className='pt-4'>
                <h4 className='font-bold'>CONTACT US<br /> <br /></h4>
                <h8>Mail: support@reybon.com</h8>
            </div>
        </div>
        <div className='flex flex-col items-center text-center'>
            <div className=''>
                <Award className='w-14 h-14'/>
            </div>
            <div className='pt-4'>
                <h4 className='font-bold'>TRUSTED QUALITY <br /> <br /></h4>
                <h8>Rated 5 Star by 95% of our customers</h8>
            </div>
        </div>
    </div>
  )
}

export default Features