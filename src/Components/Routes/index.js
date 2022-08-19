import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../../Pages/Home/index"
import Movies from "../../Pages/Movies/index";
import Series from "../../Pages/Series/index";

export default class App extends React.Component{
    render(){
        return(
             <Routes>
                <Route path="/xfilmes" element={<Home/>}/>
                <Route path="/filmes" element={<Movies/>}/>
                <Route path="/series" element={<Series/>}/>
             </Routes>
        )
    }
}