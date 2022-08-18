import React from "react"
import Axios from "axios"
import * as S from "./style"

//ARMAZENANDO MINHA API DE FORMA Q MEU CODIGO ENTENDA
//AXIOS TA CRIANDO BASE URL
const moviesAPI = Axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR&page=1`
})
export default class Movies extends React.Component {
  //SE QUERO RENDERIZAR E TAL, PRECISO GUARDAR NO ESTADO PORQUE É UMA COLEÇÃO DE ARRAY, PQ O ESTADO EU CONSIGO MANIPULAR
  state = {
    movies: [],
    moviesFilter: [],
  }
  componentDidMount() {
    this.addMovies()
    document.title = "Filmes"
  }
  //FAZER REQUISIÇÃO A HORA Q EU QUISER, METODO ASYNC
  //CONST RESPOSTA É NOME PADRÃO, QUANDP PEÇO ALGO, EXEMPLO AGUA GARÇOM
  //EXEMPLO BOTÃO, DIDIMOUNT VAI DEIXAR NO ESTADO INICCIAL
  addMovies = async () => {
    const response = await moviesAPI.get()
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
  handleFilter = (e) => {
    const { movies } = this.state
    const Filter = movies.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true
      }
    })
    this.setState({
      moviesFilter: Filter
    })
  }
  render() {
    const { moviesFilter } = this.state
    const { handleFilter } = this
    return (
      <S.Container>
        <S.FilterBox>
          <S.Label><S.Span>|</S.Span>Busque pelo seu filme aqui:</S.Label>
          <S.Search placeholder="Digite o seu filme..." onChange={handleFilter} type="text" />
        </S.FilterBox>
        <S.Box>
          {moviesFilter.map((item) => (
            <S.MovieBox key={item.id}>
              <S.Poster src={item.img} alt={`Poster do filme ${item.title}`} title={`Poster do filme ${item.title}`}/>
              <div>
                <S.Title><S.Span>|</S.Span>{item.title}</S.Title>
                <S.Overview>{item.overview}</S.Overview>
                <S.InfoBox>
                  <S.Info>Data de lançamento: <S.InfoSpan>{item.release_date}</S.InfoSpan></S.Info>
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