import React from 'react'
import Mc from "./components/Mc";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <h1 className="text-white text-5xl mb-10 text-center">
        🎬 Movie Recommendations
      </h1>

      <div className="flex-gap-6">
        <div className="bg-slate-800 p-4 rounded-xl w-64 hover:scale-105 transition duration-300">
          <Mc/>
        </div>
         <div className="bg-slate-800 p-4 rounded-xl w-64 hover:scale-105 transition duration-300">
          <Mc/>
        </div>
         <div className="bg-slate-800 p-4 rounded-xl w-64 hover:scale-105 transition duration-300">
          <Mc/>
        </div>
      </div>

    </div>
  )
}

export default App
