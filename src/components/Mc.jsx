import React from 'react'

const Mc = () => {
  return (
    <div className="bg-slate-800 p-4 rounded-xl w-64">
        <img src="https://via.placeholder.com/250x350"
        alt="movie"
        className="rounded-lg"></img>

        <h2 className="text-white text-xl mt-3">
            Interstellar
        </h2>

       <p className="text-gray-400">⭐ 8.7</p> 

       <button className="bg-blue-500 px-4 py-2 rounded-lg mt-3 text-white">
        Watch Now</button>  
      
    </div>
  )
}

export default Mc;
