import React from "react";
import GitHub from "./img/github.png";
import Instagram from "./img/instagram.png";
import LinkedIn from "./img/linkedin.png";
import * as S from "./style";

export default function Footer() {
  return (
    <S.Footer>
      <S.Paragraphy>© 2022 Mariana Melo</S.Paragraphy>
      <S.Nav>
        <S.Figure>
          <a href="https://github.com/askmary">
            <S.Image src={GitHub} alt="ícone GitHub" />
          </a>
        </S.Figure>
        <S.Figure>
          <a href="https://www.instagram.com/askmary_/">
            <S.Image src={Instagram} alt="ícone Instagram" />
          </a>
        </S.Figure>
        <S.Figure>
          <a href="https://www.linkedin.com/in/mariana-melo-79a509218">
            <S.Image src={LinkedIn} alt="ícone LinkedIn" />
          </a>
        </S.Figure>
      </S.Nav>
    </S.Footer>
  );
}
