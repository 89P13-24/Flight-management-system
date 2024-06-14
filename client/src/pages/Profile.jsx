import { useSelector } from "react-redux"

export default function Profile() {
  const {currentUser} = useSelector((state)=> state.user);
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className='text-3xl font-semibold my-7 text-center'>Profile</h1>
      <form className="flex flex-col gap-4">
      <img src={currentUser.avatar} alt="profile" className="self-center rounded-full h-24 w-24 object-cover mt-2 cursor-pointer"/>
      <input type="text" placeholder="username" id = "username" className="p-3 rounded-lg border"/>
      <input type="email" placeholder="email" id = "email" className="p-3 rounded-lg border"/>
      <input type="text" placeholder="password" id = "password" className="p-3 rounded-lg border"/>
      <button className="bg-slate-700 uppercase p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-80">update</button>
      
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
      
    </div>
  )
}
