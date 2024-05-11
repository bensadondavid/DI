import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from './PostList';
import Example1 from './Example2';
import Example2 from './Example2';
import Example3 from './Example3';
import FetchJson from './Ex4';

function App() {

  const HomeScreen = ()=>{
    return <h1>Home</h1>
}

  const ProfileScreen = ()=>{
    return <h1>Profile Screen</h1>
  }

  const ShopScreen = ()=>{
    return <h1>An error has occured.</h1>
  }

  return (
    <>
    <BrowserRouter>
    <PostList/>
    <Example3 />
    <FetchJson/>
    <nav>
     <NavLink to={'/'}>Home</NavLink>{' '}
     <NavLink to={'profile'}>Profile</NavLink>{' '}
     <NavLink to={'shop'}>Shop</NavLink>
    </nav>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/profile' element={<ProfileScreen/>}/>
      <Route path='/shop' element={<ShopScreen/>}/>
    </Routes>

     </BrowserRouter>
    </>
  )
}

export default App
