import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (id)=>{
    const dispatch = useDispatch();
    // console.log("in useMovieTrailer hook",id);

    
    //fetching the trailer video and updating the store with the trailer video data
    const getClips = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_OPTIONS)
        const json = await data.json();
        console.log(json);
        const trailer = json.results.filter(video=>video?.type === "Trailer")
        dispatch(addTrailer(trailer[0]));
    }
    useEffect(()=>{
        getClips();
    },[id])
}
export default useMovieTrailer;