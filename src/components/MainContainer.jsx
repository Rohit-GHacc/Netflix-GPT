import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector(store => store.movie?.nowPlayingMovies)
    if(!movies) return; 
    const mainMovie = movies[2];
    // console.log(mainMovie?.id);
  return (
    <div className = 'absolute'>
      <VideoTitle title = {mainMovie?.title} overview = {mainMovie?.overview} />
      <VideoBackground id = {mainMovie?.id} />
    </div>
  )
}

export default MainContainer
