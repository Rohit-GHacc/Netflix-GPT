import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
const VideoBackground = ({id}) => {
  const trailer = useSelector(store=>store.movie?.trailer)
  useMovieTrailer(id);
  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/dqolYtJGuf4?si=" + trailer?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      
    </div>
  )
}

export default VideoBackground
