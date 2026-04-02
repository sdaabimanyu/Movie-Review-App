import React, { useEffect, useState } from "react";

export default function BannerSlide() {
  // const [movies, setMovies] = useState([]);
  const [slide, setSlide] = useState(0);
  const movie = [
    {
      id: 1,
      title: "Avengers End Game",
      year: 2019,
      description: `After the devastating events of the Infinity War,
       the Avengers assemble once more to reverse Thanos' actions and
        restore balance to the universe`,
      rating: 8.5,
      image: "./src/assets/Avengers.jpeg",
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      description: `Interstellar (2014) is a mind-bending,
       dystopian sci-fi drama where, with humanity teetering on the brink of
        extinction due to a dying Earth, a group of astronauts travels through
         a wormhole in search of a new, habitable planet. Directed by Christopher Nolan,
          this epic focuses on a former pilot (Matthew McConaughey) navigating space to save mankind.`,
      rating: 8.7,
      image: "./src/assets/Interstellar1.jpg",
    },
    {
      id: 3,
      title: "Spider-Man",
      year: 2002,
      description: ` Spider-Man (2002) is a superhero film where average teenager Peter
       Parker is transformed into an extraordinary hero after a radioactive spider bite.
        Following his uncle's murder, Peter vows to fight crime as "Spider-Man," bringing
         him into direct conflict with the malevolent "Green Goblin".`,
      rating: 8.7,
      image: "./src/assets/spiderman.jpg",
    },
    {
      id: 4,
      title: "Ratatouille",
      year: 2007,
      description: `Ratatouille (2007) is a Pixar animated comedy following Remy,
       a young rat in Paris who dreams of becoming a renowned French chef, despite
        his family's wishes and the obvious dangers. Separated from his colony,
         Remy finds himself under a famous restaurant, where he teams up with a
          struggling kitchen worker, Linguini, to create culinary magic and turn
           Paris upside down.`,
      rating: 8.1,
      image: "src/assets/ratatouille1.jpg",
    },
    {
      id: 5,
      title: "Monster, Inc",
      year: 2001,
      description: `Monsters, Inc. is a 2001 animated buddy comedy where top scarer
       James P. "Sulley" Sullivan and his wisecracking best friend, Mike Wazowski, 
       work at a scream-processing factory. When a little girl named Boo accidentally
        enters their world, the duo must return her home while uncovering a conspiracy.`,
      rating: 8.1,
      image: "/src/assets/monster-inc.jpg",
    },
  ];

  useEffect(() => {

    const slideInterval = setInterval(() => {
      setSlide((prev) => (prev === movie.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [movie.length]);

  return (
    <div className="w-full h-120 rounded-2xl mb-10 overflow-hidden ">
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {movie.map((movie, index) => (
          <div className="min-w-full h-full relative" key={index}>
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full "
            />

            <div className="text-white absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <div className="flex items-center gap-x-2 mb-3">
                <div className="w-[60px] h-[18px] bg-purple-500 rounded-sm flex justify-center items-center">
                  <p className="text-[12px] font-semibold">Featured</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <i className="fa-solid fa-star text-[14px] text-amber-300"></i>
                  <p className="text-[14px]">{movie.rating}</p>
                </div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <p className="text-[14px]">{movie.year}</p>
              </div>

              <h1 className="font-semibold text-4xl mb-3">{movie.title}</h1>
              <p className="text-[12px] max-w-[50ch] text-base line-clamp-3">
                {movie.description}
              </p>
              <div className="flex gap-3">
                <button className="w-[150px] h-[35px] rounded mt-3 bg-purple-500">
                  Watch Now
                </button>
                <button className="w-[150px] h-[35px] rounded mt-3 bg-[#242424] border-[#2d2d2d] border-3">
                  + Add To Watchlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
