import React, { useState } from "react";
import * as S from "./style";
import Modal from "../Menu-Modal";
import Hamburger from "hamburger-react";

export default function Header() {
  const [isOpen, setOpen] = useState(false)
  return (
    <S.Container>
      <S.NavBar>
        <S.Title>
          <S.StyledLink to="/xfilmes">x-filmes</S.StyledLink>
        </S.Title>
        <S.Menu>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </S.Menu>
        {isOpen ? <Modal /> : null}
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
      </S.NavBar>
    </S.Container>
  );
}
