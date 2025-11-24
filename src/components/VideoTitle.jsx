import React from 'react'
const VideoTitle = ({title, overview}) => {
  return (
    <div className = 'py-52 px-10 '>
     <h1 className = 'font-bold text-6xl'> {title} </h1>
      <p className = 'py-4 w-1/2 text-2xl'> {overview} </p>
      <div>
        <button className = 'px-8 py-4 bg-gray-400 text-white text-lg bg-opacity-1/2 m-2 rounded-lg'> ▶️   Play </button>
        <button className = 'px-8 py-4 bg-gray-400 text-white text-lg bg-opacity-1/2 m-2 rounded-lg'> More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
