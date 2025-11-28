import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const language = useSelector(store=> store.gptSearch.language)
  return (
    <div className = 'w-screen top-[20%] absolute flex justify-center' onSubmit={(e)=>e.preventDefault()}>
        <form className = 'grid grid-cols-12 w-1/2'>
            <input type = 'text' placeholder = {lang[language].placeholder} className = 'px-6 py-4 rounded-l-lg bg-white col-span-9'/>
            <button className = 'bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white px-6 py-4 rounded-r-lg col-span-3 cursor-pointer'> {lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
