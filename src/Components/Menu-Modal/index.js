import React from "react";
import * as S from "./style";

export default class Modal extends React.Component {
  render() {
    return (
      <S.SubContainer>
        <S.ListModal>
          <S.ItemListModal>
            <S.AnchorModal to="/">Início</S.AnchorModal>
          </S.ItemListModal>
          <S.ItemListModal>
            <S.AnchorModal to="/filmes">Filmes</S.AnchorModal>
          </S.ItemListModal>
          <S.ItemListModal>
            <S.AnchorModal to="/series">Séries</S.AnchorModal>
          </S.ItemListModal>
        </S.ListModal>
      </S.SubContainer>
    );
  }
}
