import React from "react"
import Carousel from "nuka-carousel/lib/carousel"
import Axios from "axios"
import * as S from "./style"
import Modal from "../../Components/Modal"

const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplayInterval: 2000,
    wrapAround: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    dragThreshold: 4,
    enableKeyboardControls:true,
    slideWidth:'90%',
    defaultControlsConfig: {
        nextButtonText: ">",
        prevButtonText: "<",
        pagingDotsStyle: {
            display:'none'
        },
        nextButtonStyle: {
            marginRight: '1vw',
            color:'#FF0000',
            border: 'none'

        },
        prevButtonStyle: {
            marginLeft: '1vw',
            color:'#FF0000',
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
        seriesFilter: [],
        stateModal: false
      }
      componentDidMount() {
        this.addMovies()
        this.addSeries()
        document.title = "X-FILMES"
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
                img: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            }
        })
        this.setState({
            series: final, seriesFilter: final
        })
    }
    handleModal = () => {
        const {stateModal} = this.state
        this.setState({
            stateModal: !stateModal
        })
    }
    
    render(){
        const {movies, series, stateModal} = this.state
        const {handleModal} = this
        return(
            <>
            <S.Label><S.Span>|</S.Span> Filmes populares no momento:</S.Label>
            <Carousel {...settings}>
                {movies.map((item) => (
                    <S.Box key={item.id}>
                        <S.Title>{item.title}</S.Title>
                        <S.Poster src={item.img} alt={`Poster do filme ${item.title}`} title={`Poster do filme ${item.title}`}/>
                    </S.Box>
                ))}
            </Carousel>
            <S.Label><S.Span>|</S.Span> Séries populares no momento:</S.Label>
            <Carousel {...settings}>
                {series.map((item) => (
                    <S.Box key={item.id}>
                        <S.Title>{item.name}</S.Title>
                        <S.Poster onClick={() => {handleModal(item.id)}} src={item.img} alt={`Poster do filme ${item.name}`} title={`Poster do filme ${item.name}`}/>
                        {stateModal && <Modal/>}
                    </S.Box>
                ))}
            </Carousel>
            </>
        )
    }
}