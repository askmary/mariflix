import React from "react"
import Carousel from "nuka-carousel/lib/carousel"
import Axios from "axios"

const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    dragThreshold: 4,
    enableKeyboardControls:true,
    slideWidth:'90%',
    defaultControlsConfig: {
        nextButtonText: ">",
        prevButtonText: "<",
        pagingDotsStyle: {
            fill: "blue",
            display:'none'
        },
        nextButtonStyle: {
            marginRight: '1vw',
            color: 'white',
            border: 'none'

        },
        prevButtonStyle: {
            color: 'white',
            border: 'none'
        }
    },

}
const filmsAPI = Axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=en-US&page=1`
  })
const seriesAPI = Axios.create({
    baseURL: `https://api.themoviedb.org/3/tv/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=en-US&page=1`
})
export default class App extends React.Component{
    state = {
        movies: [],
        moviesFilter: [],
        series: [],
        seriesFilter: []
      }
      componentDidMount() {
        this.addMovies()
        this.addSeries()
      }

      addMovies = async () => {
        const response = await filmsAPI.get()
        const final = response.data.results.map((item) => {
          return {
            ...item,
            img: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          }
        })
        this.setState({
          movies: final, moviesFilter: final
        })
      }
      addSeries = async () => {
        const response = await seriesAPI.get()
        const final = response.data.results.map((item) => {
            return {
                ...item,
                img: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
            }
        })
        this.setState({
            series: final, seriesFilter: final
        })
    }
    render(){
        const {movies, series} = this.state
        return(
            <>
            <Carousel {...settings}>
                {movies.map((item) => (
                    <div>
                        <h2>{item.title}</h2>
                        <img src={item.img}/>
                    </div>
                ))}
            </Carousel>
            <Carousel {...settings}>
                {series.map((item) => (
                    <div>
                        <h2>{item.name}</h2>
                        <img src={item.img}/>
                    </div>
                ))}
            </Carousel>
            </>
        )
    }
}