import React from "react"
import { useState, useEffect } from "react"
import { getMovies } from "../services/tapeService"
import { selectTape } from "../services/rentalService"
import { useNavigate } from "react-router-dom"
import { getUserId } from "../services/userService"
// import "./Movies.css"

export const AllTapes = () => {
    const [allTapes, setAllTapes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getMovies().then((tapesArray) => {
            setAllTapes(tapesArray)
        })
    }, [])

    const handleTapeSelection = (tapeId) => {
        // const getCurrentUserId = getUserId()

        selectTape(tapeId).then(() => {
            navigate(`/myrentals`)
        }).catch(error => {
            console.error("Error selecting tape:", error)
        })
    }


    const seeAllReviews = (tapeId) => {
        navigate(`/review/${tapeId}`)
    }

    return (
        <div>
            <div className="list-header">
        <h1 className="font-vhs">V-H-YES!</h1>
        <h4>Select your physical media artifact below!</h4>
        </div>
        <div className="movie-container">
        {allTapes.map((tape) => {
            return (
                <div key={tape.id} className="movie-card">
                <img
                src={tape.cover_img_url}
                alt={tape.title}
                className="movie-img w-10 h-10 object-cover"
                onClick={() => {
                    navigate(`/movie/${tape.id}`)
                }}
                ></img>
            <div className="tape-name">{tape.title}</div>
            <div className="tape-name">{tape.release_year}</div>
            <div className="tape-name">Starring: {tape.starring}</div>
            <div className="tape-name">Director: {tape.director}</div>
            <div className="tape-name">Genre: {tape.genre_data.map(genre => genre.label).join(', ')}</div>
            <div className="tape-name">A {tape.production_studio} Film</div>
                <div>
                    <button onClick={() => handleTapeSelection(tape.id)} className="select-btn">
                        Select This Tape
                    </button>
                    <button onClick={() => seeAllReviews(tape.id)} className="all-reviews-btn">
                        See Reviews For This Film
                    </button>
                    </div>
        </div>
        )
    })}       
        </div>
    </div>
    )
}