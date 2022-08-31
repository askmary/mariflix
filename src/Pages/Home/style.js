import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 1100px) {
    height: 60vh;
  }
  @media (max-width: 790px) {
    height: 55vh;
  }
  @media (max-width: 650px) {
    height: 50vh;
  }
  @media (max-width: 600px) {
    height: 40vh;
  }
  @media (max-width: 500px) {
    height: 30vh;
  }
`;
export const Title = styled.h2`
  font-size: 1.1rem;
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
export const Poster = styled.img`
  width: 90%;
`;
export const Label = styled.h1`
  padding: 40px 0px 40px 30px;
  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
  @media (max-width: 330px) {
    font-size: 1rem;
    padding: 40px 0px 0px 30px;
  }
`;
export const Span = styled.span`
  color: #ff0000;
`;
export const Anchor = styled(Link)`
  text-align: center;
`;
