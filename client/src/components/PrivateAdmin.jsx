import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate,Outlet } from 'react-router-dom';
export default function PrivateAdmin() {
    const {currentUser} = useSelector((state) => state.user);
  if(!currentUser) return <Navigate to ='/sign-in'/>;
  if(currentUser.admin) return <Outlet/>;
  return <Navigate to ='/profile'/>;
}
