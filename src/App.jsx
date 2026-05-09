import React from 'react'
import Mc from "./components/Mc";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <h1 className="text-white text-5xl mb-10 text-center">
        🎬 Movie Recommendations
      </h1>

      <div className="flex-gap-6">
        <Mc/>
        <Mc/>
        <Mc/>
      </div>

    </div>
  )
}

export default App
