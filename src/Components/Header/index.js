import React from "react";
import * as S from "./style";
import Modal from "../Menu-Modal";
import Hamburger from "hamburger-react";

export default class Header extends React.Component {
  state = {
    stateModal: false,
  };
  handleModal = () => {
    const { stateModal } = this.state;
    this.setState({
      stateModal: !stateModal,
    });
  };
  render() {
    const { stateModal } = this.state;
    const { handleModal } = this;
    return (
      <S.Container>
        <S.NavBar>
          <S.Title>
            <S.StyledLink to="/xfilmes">x-filmes</S.StyledLink>
          </S.Title>
          <S.Menu>
              <Hamburger
                onToggle={() => {
                  handleModal();
                }}
              />
            </S.Menu>
            {stateModal && <Modal />}
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
}
