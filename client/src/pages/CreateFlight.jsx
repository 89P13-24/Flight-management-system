import React from 'react'

export default function CreateFlight() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Create a Flight</h1>
        <form className='flex flex-row p-3 gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <label htmlFor="airline" className='sr-only'>Airline</label>
                <input type="text" id="airline" placeholder='Airline' className='border p-3 rounded-lg' required/>

                <label htmlFor="flightNumber" className='sr-only'>Flight Number</label>
                <input type="text" id="flightNumber" placeholder='Flight Number' className='border p-3 rounded-lg' required/>

                <label htmlFor="departureAirport" className='sr-only'>Departure Airport</label>
                <input type="text" id="departureAirport" placeholder='Departure Airport' className='border p-3 rounded-lg' required/>

                <label htmlFor="arrivalAirport" className='sr-only'>Arrival Airport</label>
                <input type="text" id="arrivalAirport" placeholder='Arrival Airport' className='border p-3 rounded-lg' required/>

                <label htmlFor="price" className='sr-only'>Price</label>
                <input type="number" id="price" placeholder='Price' className='border p-3 rounded-lg' min="0" required/>

                <label htmlFor="availableSeats" className='sr-only'>Available Seats</label>
                <input type="number" id="availableSeats" placeholder='Available Seats' className='border p-3 rounded-lg' min="1" required/>
            </div>
            <div className='flex flex-col gap-4 flex-1 items-end'>
                <div>
                    <label htmlFor="departureDate" className='font-semibold'>Departure Date:</label>
                    <input type="datetime-local" id="departureDate" className='p-3 border rounded-lg' required/>
                </div>
                <div>
                    <label htmlFor="arrivalDate" className='font-semibold'>Arrival Date:</label>
                    <input type="datetime-local" id="arrivalDate" className='p-3 border rounded-lg' required/>
                </div>
                <div>
                    <label htmlFor="duration" className='sr-only'>Duration</label>
                    <input type="number" id="duration" placeholder='Duration (minutes)' className='border p-3 rounded-lg w-80' min="0" required/>
                </div>
                <button type="submit" className='bg-slate-700 w-full p-3 rounded-xl uppercase text-white hover:opacity-95 disabled:opacity-80'>Create a flight</button>
            </div>
        </form>
    </main>
  )
}
