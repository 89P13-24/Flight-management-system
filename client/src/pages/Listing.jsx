import { useEffect, useState } from "react"
import { FaPlane, FaPlaneDeparture } from "react-icons/fa";
import { useParams } from "react-router-dom"
import ListingCard from "./ListingCard";

export default function Listing() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [listing, setListing] = useState(null);
    const params = useParams();
    useEffect(()=>{
        const fetchListing = async() =>{
            try{
                setLoading(true);
                const res = await fetch(`/api/flight/get/${params.id}`);
                const data = await res.json();
                if (data.success === false) {
                  setError(true);
                  setLoading(false);
                  return;
                }
                setListing(data);
                setLoading(false);
                setError(false);
              } catch (error) {
                setError(true);
                setLoading(false);
              }
        };
        fetchListing();
    },[params.id]);
  return (
    <main>
         {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <ListingCard listing={listing}/>
      )
      }
    <div className="max-w-2xl mt-7">
        <h1 className="text-slate-700 font-semibold text-2xl max-w-2xl text-center">Available Flights on your route</h1>

    </div>
    </main>
  )
}
