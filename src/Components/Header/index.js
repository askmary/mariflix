import React from "react";
import * as S from "./style";
import Modal from "../Menu-Modal";
import MenuImage from "./img/menu.png";

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
          <S.TitleBox>
            <S.Title>x-filmes</S.Title>
          </S.TitleBox>
          <S.List>
            <S.Button
              onClick={() => {
                handleModal();
              }}
            >
              <img src={MenuImage} alt="menu" />
            </S.Button>
            {stateModal && <Modal />}
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
