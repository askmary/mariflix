import React from "react";
import * as S from "./style";

export default class Modal extends React.Component {
  render() {
    return (
      <S.SubContainer>
        <S.List>
          <S.ItemList>
            <S.Anchor to="/xfilmes">Início</S.Anchor>
          </S.ItemList>
          <S.ItemList>
            <S.Anchor to="/filmes">Filmes</S.Anchor>
          </S.ItemList>
          <S.ItemList>
            <S.Anchor to="/series">Séries</S.Anchor>
          </S.ItemList>
        </S.List>
      </S.SubContainer>
    );
  }
}
