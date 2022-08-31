import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width:500px){
    flex-direction: column;
  }
`;
export const Nav = styled.nav`
  width: 30%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media(max-width:500px){
    width:70%;
  }
`;
export const Figure = styled.figure`
  width: 40%;
  text-align:center;
`;
export const Image = styled.img`
  width: 20%;
  @media(max-width:900px){
    width:35%;
  }
`;
export const Paragraphy = styled.p`
  margin-left: 50px;
  @media(max-width:500px){
    margin:0;
  }
`;
