import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
const VideoBackground = ({id}) => {
  // console.log("in videobackground component",id);
  const trailer = useSelector(store=>store.movie?.trailer)
  useMovieTrailer(id);
  console.log("in videoBackground"+trailer)
  // console.log(trailer.key)
  return (
    <div className = 'w-screen'>
      <iframe className = 'w-screen h-screen aspect-video'  src={"https://www.youtube.com/embed/" + trailer?.key +"?si=yc8Xur-Zpe1cCV_f&autoplay=1&mute=1"}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      
    </div>
  )
}

export default VideoBackground
