import React from 'react'

const MovieCard = ({movieInfo}) => {
    console.log("In movie card" , movieInfo)
  return (
    <div className = ' w-40 shrink-0 md:w-48 cursor-pointer hover:w-44 '>
      <img className = 'rounded-lg' src = {'https://image.tmdb.org/t/p/w1920'+movieInfo.poster_path}/>
    </div>
  )
}

export default MovieCard
