import React ,{ useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';
const VideoBackground = ({id}) => {
    const dispatch = useDispatch();
    const trailer = useSelector(store=>store.movie?.trailer)
    const getClips = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_OPTIONS)
        const json = await data.json();
        console.log(json);
        const trailer = json.results.filter(video=>video?.type === "Trailer")
        dispatch(addTrailer(trailer));
    }
    useEffect(()=>{
        getClips();
    },[])
  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/dqolYtJGuf4?si=" + trailer?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      
    </div>
  )
}

export default VideoBackground
