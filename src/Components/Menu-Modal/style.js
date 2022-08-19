import styled from "styled-components";
import {Link} from "react-router-dom"

export const SubContainer = styled.div`
  width: 40vw;
  background: pink;
  height: 30vh;
  position:absolute;
  border: 2px green solid;
  z-index:1;
`;
export const List = styled.ul`
  width:40%;
  list-style:none;
  display:flex;
  justify-content:space-evenly;
  flex-direction:column;
`
export const ItemList = styled.li`
  font-size:1.2rem;
  text-transform:uppercase;
  transition:1s;
`
export const Anchor = styled(Link)`
  text-decoration:none;
  color:#FF0000;
  &:hover{
    color:#FFFAFA;
  }
`