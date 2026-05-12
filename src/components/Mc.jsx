import React from 'react'

const Mc = (props) => {
  return (
    <div className="bg-slate-800 p-4 rounded-2xl w-64 hover:scale-105 hover:shadow-2xl transition duration-300">
        <img src={props.image}
        alt="movie"
        className="rounded-lg h-80 w-full object-cover"></img>

        <h2 className="text-white text-xl mt-3">
            {props.title}
        </h2>

       <p className="text-gray-400">⭐ {props.rating}</p> 

       <p className="text-sm text-slat-400">{props.genre}</p>

       <button className="bg-blue-500 px-4 py-2 rounded-lg mt-3 text-white p-4  w-64 hover:scale-105 transition">
        Watch Now</button>  
      
    </div>
  )
}

export default Mc;
