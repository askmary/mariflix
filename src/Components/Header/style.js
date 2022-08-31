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
  @media (max-width:790px){
    width:90%;
  }
`;
export const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  background-color: #ff0000;
  border-radius: 9px;
  padding: 0 10px 0 10px;
`;
export const Span = styled.span`
  color:white;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: "Alata", sans-serif;
`;
export const Menu = styled.div`
  display:none;
  @media (max-width: 790px) {
   display:block;
   z-index:5;
  }
`
export const List = styled.ul`
  width: 40%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 790px) {
   display:none;
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