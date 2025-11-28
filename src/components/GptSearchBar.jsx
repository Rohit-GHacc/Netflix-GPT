import React from 'react'

const GptSearchBar = () => {
  return (
    <div className = 'w-screen top-[20%] absolute flex justify-center' onSubmit={(e)=>e.preventDefault()}>
        <form className = 'grid grid-cols-12 w-1/2'>
            <input type = 'text' placeholder = 'What would you like to watch today?' className = 'px-6 py-4 rounded-l-lg bg-white col-span-9'/>
            <button className = 'bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-6 py-4 rounded-r-lg col-span-3 cursor-pointer'> Search </button>
        </form>
    </div>
  )
}

export default GptSearchBar
