import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

export default function DetailsSeries(){
  const { id } = useParams()
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  const [serie, setSerie] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=en-US`)
    .then(response => response.json())
    .then(data => {
      const {name, poster_path, release_date, overview} = data
      const serie = {
        id,
        title: name,
        image: `${image_path}${poster_path}`,
        sinopse: overview,
        releaseDate: release_date
      }
      setSerie(serie)
    })
  }, [id])
  return(
    <div>
      <h1>oi</h1>
      <h2>{serie.title}</h2>
      <img src={serie.image}/>
    </div>
  )
}