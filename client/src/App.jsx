import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateFlight from './pages/CreateFlight';
import PrivateAdmin from './components/PrivateAdmin';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path='/sign-in' element = {<SignIn/>}></Route>
      <Route path='/sign-up' element = {<SignUp/>}></Route>
      <Route element={<PrivateRoute/>}>
        <Route path='/profile' element = {<Profile/>}></Route>
      </Route>
      <Route element={<PrivateAdmin/>}>
        <Route path='/create-flight' element = {<CreateFlight/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
