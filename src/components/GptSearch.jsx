import React from 'react'
import GptSearchSuggestions from './GptSearchSuggestions'
import GptSearchBar from './GptSearchBar';
import { NETFLIX_BG } from '../utils/constants';
const GptSearch = () => {
  return (
    <div>
        <img
                className="absolute -z-10"
                src={NETFLIX_BG}
              />
      <div className="w-full absolute -z-10 inset-0 bg-black/40  "></div>
      <GptSearchBar/>
      <GptSearchSuggestions/>
    </div>
  )
}

export default GptSearch
