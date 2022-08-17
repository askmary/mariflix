import React from "react"
import GitHub from "./img/github.png"
import Instagram from "./img/instagram.png"
import LinkedIn from "./img/linkedin.png"
import * as S from "./style"


export default class App extends React.Component {
    render() {
        return (
            <S.Footer>
                <S.Paragraphy>© 2022 Mariana Melo</S.Paragraphy>
                <S.Nav>
                    <S.Figure>
                        <a href="https://github.com/askmary" target="_blank">
                            <S.Image src={GitHub} />
                        </a>
                    </S.Figure>
                    <S.Figure>
                        <a href="https://www.instagram.com/askmary_/" target="_blank">
                            <S.Image src={Instagram} />
                        </a>
                    </S.Figure>
                    <S.Figure>
                        <a href="https://www.linkedin.com/in/mariana-melo-79a509218" target="_blank">
                            <S.Image src={LinkedIn} />
                        </a>
                    </S.Figure>
                </S.Nav>
            </S.Footer>
        )
    }
}