import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

export default function MoviesDetails(){
  const { id } = useParams()
  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movie, setMovie] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=en-US`)
    .then(response => response.json())
    .then(data => {
      const {title, poster_path, release_date, overview} = data
      const movie = {
        id,
        title,
        image: `${imagePath}${poster_path}`,
        sinopse: overview,
        releaseDate: release_date
      }
      setMovie(movie)
    })
  }, [id])
  return(
    <div>
      <h1>oi</h1>
      <h2>{movie.title}</h2>
      <img src={movie.image}/>
    </div>
  )
}