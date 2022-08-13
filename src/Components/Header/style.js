import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.header`
  color:#FF0000;
  width:100%;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
`
export const NavBar = styled.nav`
  width:80%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`
export const TitleBox = styled.div`
  background-color:#FF0000;
  width:10vw;
  border-radius:9px;
`
export const Title = styled.h1`
  font-family: 'Alata', sans-serif;
  font-size:2rem;
  text-transform: uppercase;
  color:black;
  text-align:center;
`
export const List = styled.ul`
  width:40%;
  list-style:none;
  display:flex;
  justify-content:space-evenly;
`
export const ItemList = styled.li`
  
`
export const Anchor = styled(Link)`
  text-decoration:none;
  color:#FF0000;
  cursor:pointer;
  font-size:1.2rem;
  text-transform:uppercase;
  &:hover{
    color:#FFFAFA;
  }
`