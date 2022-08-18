import React from "react"
import Axios from "axios"
import * as S from "./style"

const seriesAPI = Axios.create({
    baseURL: `https://api.themoviedb.org/3/tv/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR&page=1`
})
export default class Movies extends React.Component {
    state = {
        series: [],
        seriesFilter: []
    }
    componentDidMount() {
        this.addSeries()
        document.title = "Séries"
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
    handleFilter = (e) => {
        const Filter = this.state.series.filter((item) => {
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                return true
            }
        })
        this.setState({ seriesFilter: Filter })
        // if(e.target.value === ""){
        //     this.setState({seriesFiltradas: []})
        // }
    }
    render() {
        const {seriesFilter} = this.state
        const {handleFilter} = this
        return (
            <S.Container>
        <S.FilterBox>
          <S.Label><S.Span>|</S.Span>Busque pelo seu filme aqui:</S.Label>
          <S.Search placeholder="Digite o seu filme..." onChange={handleFilter} type="text" />
        </S.FilterBox>
        <S.Box>
          {seriesFilter.map((item) => (
            <S.MovieBox key={item.id}>
              <S.Poster src={item.img} alt={`Poster do filme ${item.name}`} title={`Poster do filme ${item.name}`}/>
              <div>
                <S.Title><S.Span>|</S.Span>{item.name}</S.Title>
                <S.Overview>{item.overview}</S.Overview>
                <S.InfoBox>
                  <S.Info>Data de lançamento: <S.InfoSpan>{item.first_air_date}</S.InfoSpan></S.Info>
                  <S.Info>Nota: <S.InfoSpan>{item.vote_average}</S.InfoSpan></S.Info>
                </S.InfoBox>
              </div>
            </S.MovieBox>
          ))}
        </S.Box>
      </S.Container>
        )
    }
}