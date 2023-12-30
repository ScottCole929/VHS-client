import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById } from "../services/reviewService";
import { getMovieById } from "../services/tapeService";

export const TapeReviews = () => {
    const [tape, setTape] = useState(null)
    const [movieReviews, setMovieReviews] = useState([])
    const { tapeId } = useParams()

    useEffect(() => {
        getMovieReviewsById(tapeId)
            .then(reviewInfo => {setMovieReviews([reviewInfo])
            })
            
        getMovieById(tapeId)
            .then(movieInfo => setTape(movieInfo))
            
        }, [tapeId])



    return (
        <div>
            {tape && <div>Reviews for {tape.title}</div>}
            {movieReviews.map(movieReview => (
                <div key={movieReview.id} className="individual-review">
                    <div>{movieReview.title}</div>
                    <div>By: {movieReview.user_info?.user_full_name || 'Unknown User'}</div>
                    <div>{movieReview.comment}</div>
                    <div>Review Date: {movieReview.date_reviewed || 'Unknown Date'}</div>
                </div>
            ))}
        </div>
    )
}