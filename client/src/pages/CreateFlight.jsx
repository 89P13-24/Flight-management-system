import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function CreateFlight() {
    const [formData, setFormData] = useState({
        airline:'',
        flightNumber:'',
        departureAirport:'',
        arrivalAirport:'',
        departureDate: new Date(),
        arrivalDate: new Date(),
        price: 0,
        duration: 0,
        availableSeats :0
    });
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    //console.log(formData);
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.id] : e.target.value});
        
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            setError(false);
            const res = await fetch('/api/flight/create',{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json();
            setLoading(false);
            if(data.success === false){
                setError(data.message);
                return;
            }
            navigate(`/flight/${data._id}`);
        }catch(err){
            setLoading(false);
            setError(err);
        }
    }
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Create a Flight</h1>
        <form onSubmit={handleSubmit} className='flex flex-row p-3 gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <label htmlFor="airline" className='sr-only'>Airline</label>
                <input type="text" id="airline" placeholder='Airline' className='border p-3 rounded-lg' onChange={handleChange} value={formData.airline} required/>

                <label htmlFor="flightNumber" className='sr-only'>Flight Number</label>
                <input type="text" id="flightNumber" placeholder='Flight Number' className='border p-3 rounded-lg' onChange={handleChange} value = {formData.flightNumber} required/>

                <label htmlFor="departureAirport" className='sr-only'>Departure Airport</label>
                <input type="text" id="departureAirport" placeholder='Departure Airport' className='border p-3 rounded-lg' onChange={handleChange} value={formData.departureAirport} required/>

                <label htmlFor="arrivalAirport" className='sr-only'>Arrival Airport</label>
                <input type="text" id="arrivalAirport" placeholder='Arrival Airport' className='border p-3 rounded-lg' onChange={handleChange} value={formData.arrivalAirport} required/>

                <label htmlFor="price" className='sr-only'>Price</label>
                <input type="number" id="price" placeholder='Price' className='border p-3 rounded-lg' min="0" onChange={handleChange} value={formData.price ?formData.price :true} required/>

                <label htmlFor="availableSeats" className='sr-only'>Available Seats</label>
                <input type="number" id="availableSeats" placeholder='Available Seats' className='border p-3 rounded-lg' min="1" onChange={handleChange} value={formData.availableSeats ? formData.availableSeats: true} required/>
            </div>
            <div className='flex flex-col gap-4 flex-1 items-end'>
                <div>
                    <label htmlFor="departureDate" className='font-semibold'>Departure Date:</label>
                    <input type="datetime-local" id="departureDate" className='p-3 border rounded-lg' onChange={handleChange} value={formData.departureDate} required/>
                </div>
                <div>
                    <label htmlFor="arrivalDate" className='font-semibold'>Arrival Date:</label>
                    <input type="datetime-local" id="arrivalDate" className='p-3 border rounded-lg' onChange={handleChange} value={formData.arrivalDate} required/>
                </div>
                <div>
                    <label htmlFor="duration" className='sr-only'>Duration</label>
                    <input type="number" id="duration" placeholder='Duration (minutes)' className='border p-3 rounded-lg w-80' min="0" onChange={handleChange} value={formData.duration ? formData.duration : true} required/>
                </div>
                <button disabled={loading} type="submit" className='bg-slate-700 w-full p-3 rounded-xl uppercase text-white hover:opacity-95 disabled:opacity-80'>{loading ? 'Creating..' : 'Create a flight'}</button>
                {error && <p className='text-red-700'>{error}</p>}
            </div>
        </form>
    </main>
  )
}
