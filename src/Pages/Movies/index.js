import React, { useState, useEffect } from "react";
import * as S from "./style";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
    document.title = "Filmes";
  }, []);

  const [search, setSearch] = useState("");
  const moviesFilter = movies.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <S.Container>
      <S.FilterBox>
        <S.Label>
          <S.Span>|</S.Span>Busque pelo seu filme aqui:
        </S.Label>
        <S.Search
          placeholder="Digite o seu filme..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
      </S.FilterBox>
     {moviesFilter.length > 0 ? (
       <S.Box>
       {moviesFilter.map((item) => (
         <S.MovieBox key={item.id}>
           <S.Poster
             src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
             alt={`Poster do filme ${item.title}`}
             title={`Poster do filme ${item.title}`}
           />
           <div>
             <S.Title>
               <S.Span>|</S.Span>
               {item.title}
             </S.Title>
             <S.Overview>{item.overview}</S.Overview>
             <S.InfoBox>
               <S.Info>
                 Data de lançamento:{" "}
                 <S.InfoSpan>{item.release_date}</S.InfoSpan>
               </S.Info>
               <S.Info>
                 Nota: <S.InfoSpan>{item.vote_average}</S.InfoSpan>
               </S.Info>
             </S.InfoBox>
           </div>
         </S.MovieBox>
       ))}
     </S.Box>
     ): (
      <S.ElseBox>
        <S.Text>Não encontramos nenhum filme com este nome!</S.Text>
        <S.Text2>:(</S.Text2>
      </S.ElseBox>
     )}
    </S.Container>
  );
}
