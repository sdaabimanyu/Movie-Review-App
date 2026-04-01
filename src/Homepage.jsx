import React from 'react'
import BannerSlide from './components/BannerSlide/BannerSlide'

export default function Homepage() {
  return (
    <section className='bg-black w-screen min-h-screen p-2 '>
      <header className='text-white  border border-gray-500 h-15 w-full rounded flex justify-between items-center p-3'>
        <h1 className='text-lg  font-bold '><span className='text-purple-500'>Le</span> Cinema</h1>
        <div className='flex gap-x-3 text-sm'>
          <a href="">Home</a>
          <a href="">movies</a>
          <a href="">Top Ratings</a>
          <a href="">Favourites</a>
        </div>
        <div>
          <input 
          type="search" 
          className='w-100 border border-gray-700  bg-slate-900 rounded-md  p-1'
          placeholder='Search For Movies'/>
        </div>
      </header>
      <BannerSlide />

    </section>
  )
}
