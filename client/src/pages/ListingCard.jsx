import React from 'react'
import { FaPlane, FaPlaneDeparture } from 'react-icons/fa'

export default function ListingCard({listing}) {
  return (
    <div key = {listing._id} className='border rounded-md cursor-pointer hover:shadow-md max-w-xl mx-auto p-2 mt-2'>
        <div className='flex gap-4 items-center'>
          <FaPlaneDeparture/>
          <span className='underline font-semibold'>{listing.airline}</span>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center'> 
          <div className='flex flex-col mt-1'>
            <p className='text-center'>{listing.departureAirport}</p>
            <p className='text-center'>{listing.departureDate.split('T')[1].substring(0,5)}</p>
            <p className='text-center'>{listing.departureDate.toString().split('T')[0]}</p>
            
          </div>
          <div className='flex flex-col text-center'>
          <FaPlane className='text-green-700'/>
          <span>{Math.round(listing.duration/60)}h {listing.duration%60}m</span>
          </div>
          
          <div className='flex flex-col'>
            <p className='text-center'>{listing.arrivalAirport}</p>
            <p className='text-center'>{listing.arrivalDate.split('T')[1].substring(0,5)}</p>
            <p className='text-center'>{listing.arrivalDate.toString().split('T')[0]}</p>
            
          </div>
          <div className='flex flex-col items-center'>
            <p>{listing.price}</p>
            <p className='text-sm text-slate-500 text-center'>Per Adult</p>
          </div>
        </div>
        <div className="flex justify-between">
            <p className="text-xs text-slate-500 mt-10">
                <span>*Terms and Conditions Apply</span>
            </p>
        <button className="bg-red-700 p-3 text-white rounded-lg mt-1">Book Now</button>
        </div>
        
      </div>
  )
}
