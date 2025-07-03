import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo, dalle } from './assets';
import {
  Home,
  CreatePost
}
  from './pages';
import ThemeSwitch from './components/ThemeSwitch';

const App = () => {
  return (
    <BrowserRouter >
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={dalle} alt="logo" className="w-28 object-contain" />
        </Link>
        <div className='flex space-x-2'>
        <ThemeSwitch />
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          Create Post
        </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} /> {/*} Home page*/}
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App