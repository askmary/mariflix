import React from "react";
import { createGlobalStyle } from "styled-components";
import Rota from "./Components/Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'ABeeZee', sans-serif;
  color:white;
}
body{
  background:black;
}
::-webkit-scrollbar{
  width:5px;
}
::-webkit-scrollbar-track{
  background:#1C1C1C;
}
::-webkit-scrollbar-thumb{
  width:2px;
  background:#FF0000;
  border-radius: 30px;
}
`;
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Rota />
      <Footer />
    </>
  );
}
