import React from "react"
import {createGlobalStyle} from "styled-components"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

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
`
export default class App extends React.Component{
  render(){
    return(
      <>
      <GlobalStyle/>
      <Header/>
      <Footer/>
      </>
    )
  }
}