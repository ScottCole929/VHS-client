import { useState, useEffect } from "react"
import { getMovies } from "../services/tapeService"
import { useNavigate } from "react-router-dom"
// import "./Movies.css"

export const AllTapes = () => {
    const [tapes, setTapes] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getMovies().then((tapesArray) => {
        setTapes(tapesArray)
        })
    }, [])

    return (
        <div>
            <div className="list-header">
        <img className="logo" 
        // src={DinnerMovie1}
         alt="Reel Meal Logo"/>
        <h1>V-H-YES!</h1>
        <h4>Select your physical media artifact below!</h4>
        </div>
        <div className="movie-container">
        {tapes.map((tape) => {
            return (
                <div key={tape.id} className="movie-card">
                <img
                src={tape.movieUrl}
                alt={tape.name}
                className="movie-img"
                onClick={() => {
                    navigate(`/tapes/${tape.id}`)
                }}
                ></img>
            <div className="tape-name">{tape.name}</div>
            <div className="tape-name">{tape.year}</div>
        </div>
        )
    })}       
        </div>
    </div>
    )
}