import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  /* border: solid red; */
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  position: relative;
  flex-direction: column;
`;
export const Background = styled.div`
  width: 100%;
  height: 60vh;
  background-size: 100vw 80vh;
  background-position:center;
  background-repeat: no-repeat;
  opacity: 0.5;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
  position: relative;
`;
export const ButtonBox = styled.div`
  position: absolute;
  left: 11.5vw;
  top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15vh;
`;
export const Btn = styled.button`
  width: 12vw;
  height: 6vh;
  background-color: #ff0000;
  font-size: 1rem;
  border-radius: 15px;
  cursor: pointer;
`;
export const Title = styled.h2`
  font-size: 2rem;
  padding: 20px;
  color: #ff0000;
`;
export const Poster = styled.img`
  height: 75vh;
  position: absolute;
  left: 5vw;
  top: 5vh;
`;
export const Overview = styled.p`
  width: 40%;
  padding: 20px;
  font-size: 1.2rem;
`;
export const About = styled.p`
  padding: 20px;
  font-size: 1.2rem;
`;
export const InfoSpan = styled.span`
  background-color: #363636;
  padding: 0.5vh 0.5vw;
  border-radius: 5px;
  color: #ff0000;
`;
export const Anchor = styled(Link)`
  text-decoration: none;
`;
export const A = styled.a`
  text-decoration: none;
`;
