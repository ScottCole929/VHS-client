import React from "react"
import { useState } from "react"
import { createReview } from "../services/reviewService"
import { useNavigate, useParams } from "react-router-dom"

export const LeaveReview = () => {
    const [reviewTitle, setReviewTitle] = useState('')
    const [reviewComment, setReviewComment] = useState('')
    const { tapeId } = useParams()

    const navigate = useNavigate()

    const submitNewReview = async (event) => {
        event.preventDefault()
        const reviewContent = {
                title: reviewTitle,
                comment: reviewComment,
                movie: tapeId
        }

        const response = await createReview(reviewContent)

        if (response.ok) {
            navigate('/myreviews')
        } else {
            console.error('Review was not submitted')
        }
    }

    return (
        <div>
            <form onSubmit={submitNewReview}>
                <label>
                    Review Name:
                    <input
                        type="text"
                        value={reviewTitle}
                        onChange={(event) => setReviewTitle(event.target.value)}
                    />
                </label>
                <label>
                    Your Review:
                    <textarea
                        value={reviewComment}
                        onChange={(event) => setReviewComment(event.target.value)}
                    />
                </label>
                <button>
                    Save Review
                </button>
            </form>
        </div>
    )
    }