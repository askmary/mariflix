import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavBar = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TitleBox = styled.div`
  background-color: #ff0000;
  width: 14%;
  border-radius: 9px;
  @media (max-width: 1465px) {
    width: 15%;
  }
  @media (max-width: 1350px) {
    width: 17%;
  }
  @media (max-width: 1299px) {
    width: 19%;
  }
  @media (max-width: 1040px) {
    width: 22%;
  }
  @media (max-width: 960px) {
    width: 25%;
  }
  @media (max-width: 875px) {
    width: 27%;
  }
  @media (max-width: 770px) {
    width: 28%;
  }
  @media (max-width: 670px) {
    width: 30%;
  }
  @media (max-width: 580px) {
    width: 32%;
  }
  @media (max-width: 565px) {
    width: 34%;
  }
  @media (max-width: 550px) {
    width: 38%;
  }
  @media (max-width: 500px) {
    width: 40%;
  }
  @media (max-width: 480px) {
    width: 42%;
  }
  @media (max-width: 450px) {
    width: 46%;
  }
  @media (max-width: 380px) {
    width: 55%;
  }
`;
export const Title = styled.h1`
  font-family: "Alata", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  color: black;
  text-align: center;
`;
export const List = styled.ul`
  width: 40%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 790px) {
    justify-content: flex-end;
  }
`;
export const Button = styled.button`
  background: transparent;
  border:none;
  display: none;
  @media (max-width: 790px) {
    display: block;
  }
`;
export const ItemList = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: 1s;
  &:hover {
    color: #fffafa;
    transform: scale(1.1);
  }
  @media (max-width: 790px) {
    display: none;
  }
`;
export const Anchor = styled(Link)`
  text-decoration: none;
  color: #ff0000;
  &:hover {
    color: #fffafa;
  }
`;
