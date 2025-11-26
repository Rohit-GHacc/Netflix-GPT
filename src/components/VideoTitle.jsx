import React from 'react'
const VideoTitle = ({title, overview}) => {
  return (
    <div className = 'pt-64 px-24 absolute w-1/2 h-screen  aspect-video text-white bg-linear-to-r from-black'>
     <h1 className = 'font-bold text-5xl mt-20'> {title} </h1>
      <p className = 'py-4 text-2xl'> {overview.substring(0,200)}... </p>
      <div className = 'flex'>
        <button className = 'px-8 py-4 bg-white hover:bg-opacity-50 text-black text-lg bg-opacity-1/2 m-2 rounded-lg flex  items-center cursor-pointer'> <span className = 'text-2xl mr-2'>▶</span> <span>Play </span></button>
        <button className = 'px-8 py-4 bg-gray-400 bg-opacity-50 text-white text-lg bg-opacity-1/2 m-2 rounded-lg cursor-pointer hover:bg-gray-500'> More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
