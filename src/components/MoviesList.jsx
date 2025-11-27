
import MovieCard from './MovieCard'

const MoviesList = ({type, movies}) => {
    if(!movies) return; 
  return (
    <div >
        <div>
            <h1 className = 'text-2xl font-bold p-2 mt-2'> {type}</h1>
            <div className = 'flex overflow-x-auto scrollbar-hide space-x-4 py-4'>
            {
              movies.map(movie => <MovieCard movieInfo = {movie}/>)
            }
            </div>
        </div>
    </div>
  )
}

export default MoviesList
