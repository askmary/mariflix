import styled from "styled-components";
import Icon from "../Assets/lupa.png";

export const Container = styled.section`
  width: 100%;
`;
export const Box = styled.section`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  @media (max-width: 1400px) {
    justify-content: center;
  }
`;
export const FilterBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
`;
export const Label = styled.h1`
  padding: 30px;
  font-size: 1.8rem;
`;
export const Search = styled.input`
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #1c1c1c;
  width: 30%;
  height: 3.5vh;
  background-image: url(${Icon});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 8px;
  font-size: 0.8rem;
  padding: 1vh 0 1vh 2.2vw;
  background-size: 15px;
  :focus {
    border-bottom: 2px solid #ff0000;
  }
`;
export const MovieBox = styled.div`
  background-color: #1c1c1c;
  width: 45%;
  height: 70vh;
  margin: 35px;
  display: flex;
  border-radius: 10px;
`;
export const Poster = styled.img`
  width: 50%;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
`;
export const Title = styled.h2`
  padding: 15px;
  font-size: 1.5rem;
`;
export const Span = styled.span`
  color: #ff0000;
  padding: 10px;
`;
export const Overview = styled.p`
  padding: 20px;
`;
export const InfoBox = styled.div`
  padding: 30px 0px 5px 10px;
`;
export const Info = styled.p`
  padding: 5px;
  color: #ff0000;
  @media (max-width: 1290px) {
    display: none;
  }
`;
export const InfoSpan = styled.span`
  background-color: #363636;
  padding: 0.5vh 0.5vw;
  border-radius: 5px;
  @media (max-width: 1290px) {
    display: none;
  }
`;
export const ElseBox = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;
export const Text = styled.h1`
  font-size: 2rem;
  padding-bottom:60px;
`;
export const Text2 = styled.h1`
  font-size: 5rem;
  color: #ff0000;
`;
