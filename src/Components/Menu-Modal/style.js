import styled from "styled-components";
import {Link} from "react-router-dom"

export const SubContainer = styled.div`
  width: 40vw;
  height:100%;
  position:absolute;
  z-index:2;
  right:0;
  top:0vh;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    @media (max-width:400px){
    width:100%;
  }
`;
export const ListModal = styled.ul`
  width:90%;
  height:30vh;
  list-style:none;
  @media (max-width:560px){
    margin-top:10vh;
  }
`
export const ItemListModal = styled.li`
  font-size:1.2rem;
  text-transform:uppercase;
  transition:1s;
  padding:40px;
  @media (max-width:400px){
  
  }
`
export const AnchorModal = styled(Link)`
  text-decoration:none;
  padding-bottom:6px;
  color:#FF0000;
  border-bottom: 2px solid;
  &:hover{
    color:#FFFAFA;
  }
`