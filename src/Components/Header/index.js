import React from "react"
import * as S from "./style"
//LIB TODA
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../../Pages/Home/index"
import Movies from "../../Pages/Movies/index"
import Series from "../../Pages/Series/index"


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <S.Container>
                    <S.NavBar>
                        <S.TitleBox>
                            <S.Title>x-filmes</S.Title>
                        </S.TitleBox>
                        <S.List>
                            <S.ItemList>
                                <S.Anchor to="/">Início</S.Anchor>
                            </S.ItemList>
                            <S.ItemList>
                                <S.Anchor to="/movies">Filmes</S.Anchor>
                            </S.ItemList>
                            <S.ItemList>
                                <S.Anchor to="/series">Séries</S.Anchor>
                            </S.ItemList>
                        </S.List>
                    </S.NavBar>
                </S.Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/series" element={<Series />} />
                </Routes>
            </Router>
        )
    }
}