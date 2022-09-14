import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import * as S from "./style";

export default function MoviesDetails() {
  const { id } = useParams();
  const image_path = "https://image.tmdb.org/t/p/w500/";

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const {
          title,
          poster_path,
          release_date,
          overview,
          backdrop_path,
          vote_average,
        } = data;
        const movie = {
          id,
          title,
          image: `${image_path}${poster_path}`,
          image2: `${image_path}${backdrop_path}`,
          overview,
          releaseDate: release_date,
          vote: vote_average,
        };
        setMovie(movie);
        document.title = `${movie.title}`;
      });
  }, [id]);

  const { title, image, overview, releaseDate, vote, image2 } = movie;
  return (
    <S.Main>
      <S.Background
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${image2})`,
        }}
      ></S.Background>
      <S.Poster src={image} />
      <S.Box>
        <S.Title>{title}</S.Title>
        <S.Overview>{overview}</S.Overview>
        <S.About>
          Data de lançamento: <S.InfoSpan>{releaseDate}</S.InfoSpan>{" "}
        </S.About>
        <S.About>
          Popularidade: <S.InfoSpan>{vote}</S.InfoSpan>
        </S.About>
        <S.ButtonBox>
          <S.Anchor to="/">
            <S.Btn>Voltar ao início</S.Btn>
          </S.Anchor>
          <S.A
            href={`https://youtube.com/results?search_query=${title} Trailer`}
            target="blank"
          >
            <S.Btn>Trailer</S.Btn>
          </S.A>
        </S.ButtonBox>
      </S.Box>
    </S.Main>
  );
}
