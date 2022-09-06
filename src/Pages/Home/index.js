import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import * as S from "./style";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplayInterval: 2000,
  wrapAround: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  dragThreshold: 4,
  enableKeyboardControls: true,
  slideWidth: "90%",
  defaultControlsConfig: {
    nextButtonText: ">",
    prevButtonText: "<",
    pagingDotsStyle: {
      display: "none",
    },
    nextButtonStyle: {
      marginRight: "1vw",
      color: "#FF0000",
      border: "none",
    },
    prevButtonStyle: {
      marginLeft: "1vw",
      color: "#FF0000",
      border: "none",
    },
  },
};
const image_path = "https://image.tmdb.org/t/p/w500/";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
      document.title = 'MaryFlix'
  }, []);

  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.results);
      });
  }, []);
  return (
    <div>
      <S.Label>
        <S.Span>|</S.Span> Filmes populares no momento:
      </S.Label>
      <Carousel {...settings}>
        {movies.map((item) => (
          <S.Box key={item.id}>
            <S.Title>{item.title}</S.Title>
            <S.Anchor to={`/details-filmes/${item.id}`}>
              <S.Poster
                src={`${image_path}${item.poster_path}`}
                alt={`Poster da série ${item.title}`}
                title={`Poster da série ${item.title}`}
              />
            </S.Anchor>
          </S.Box>
        ))}
      </Carousel>
      <S.Label>
        <S.Span>|</S.Span> Séries populares no momento:
      </S.Label>
      <Carousel {...settings}>
        {series.map((item) => (
          <S.Box key={item.id}>
            <S.Title>{item.name}</S.Title>
            <S.Anchor to={`/details-series/${item.id}`}>
              <S.Poster
                src={`${image_path}${item.poster_path}`}
                alt={`Poster da série ${item.name}`}
                title={`Poster da série ${item.name}`}
              />
            </S.Anchor>
          </S.Box>
        ))}
      </Carousel>
    </div>
  );
}
