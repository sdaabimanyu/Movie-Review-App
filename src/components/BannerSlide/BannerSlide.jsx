import React, { useEffect, useState } from 'react'

export default function BannerSlide() {

  const [currentSlide, setCurrentSlide] = useState(0);

  cosnt movie

  useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev === movie.length - 1 ? 0 : prev + 1));
      }, 4000)
      return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className='bg-amber-50 w-full h-110  mt-2'>
        
    </div> 
  )
}
