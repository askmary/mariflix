import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";

export default function DetailsSeries() {
  const { id } = useParams();
  const image_path = "https://image.tmdb.org/t/p/w500/";

  const [serie, setSerie] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const {
          name,
          poster_path,
          overview,
          vote_average,
          backdrop_path,
          first_air_date,
        } = data;
        const serie = {
          id,
          title: name,
          image: `${image_path}${poster_path}`,
          image2: `${image_path}${backdrop_path}`,
          overview,
          releaseDate: first_air_date,
          vote: vote_average,
        };
        setSerie(serie);
        document.title = `${serie.title}`;
      });
  }, [id]);
  const { title, image, overview, releaseDate, vote, image2 } = serie;
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
