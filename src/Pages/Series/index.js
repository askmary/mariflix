import React from "react"
import Axios from "axios"

const seriesAPI = Axios.create({
    baseURL: `https://api.themoviedb.org/3/tv/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=en-US&page=1`
})
export default class Movies extends React.Component {
    state = {
        series: [],
        seriesFilter: []
    }
    componentDidMount() {
        this.addSeries()
    }
    addSeries = async () => {
        const response = await seriesAPI.get()
        const final = response.data.results.map((item) => {
            return {
                ...item,
                img: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
            }
        })
        this.setState({
            series: final, seriesFilter: final
        })
    }
    handleFilter = (e) => {
        const Filter = this.state.series.filter((item) => {
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                return true
            }
        })
        this.setState({ seriesFilter: Filter })
        // if(e.target.value === ""){
        //     this.setState({seriesFiltradas: []})
        // }
    }
    render() {
        const {seriesFilter} = this.state
        return (
            <>
                <input onChange={this.handleFilter} />
                {seriesFilter.map((item) => (
                    <>
                        <h1>{item.name}</h1>
                        <img src={item.img} />
                    </>
                ))}
            </>
        )
    }
}