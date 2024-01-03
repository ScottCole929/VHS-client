import { useEffect, useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"
import { getSelectedTape, getPastRentedTapes, deleteSelectedTape } from "../services/rentalService"

export const MyRentals = () => {
    const [tapeSelection, setTapeSelection] = useState(null)
    const [pastTapeRentals, setPastTapeRentals] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getSelectedTape().then(selected => {
            setTapeSelection(selected)
        })

        getPastRentedTapes().then(rented => {
            setPastTapeRentals(rented)
        })
    }, [])

    const handleSelectionDelete = () => {
        deleteSelectedTape(tapeSelection.id).then(() => {
            setTapeSelection(null)
            alert("Tape has been removed from your selection.")
        })
    }

return (
    <div>
        <div>VHS Currently Selected</div>
        {tapeSelection ? (
            <div>
                <h2>{tapeSelection.movie?.title}</h2>
                <img
                src={tapeSelection.movie?.cover_img_url}
                className="movie-img w-10 h-10 object-cover"
                ></img>
                <button>
                    Rent This Movie
                </button>
                <button onClick={handleSelectionDelete}>
                    Remove Tape from Selection
                </button>
            </div>
        ) : (
            <div>No VHS selected yet</div>
        )}
        <div>Your Past VHS Rentals</div>
        {pastTapeRentals.length > 0 ? (
            pastTapeRentals.map(rental => (
                <div key={rental.id}>
                    <h2>{rental.movie?.title}</h2>
                    <p>Date Rented: {rental.date_rented}</p>
                    <p>Date Returned: {rental.date_returned}</p>
                </div>
            ))
        ) : (
            <p>You have no previous rented tapes</p>
        )}
    </div>
    )
}