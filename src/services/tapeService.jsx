export const getMovies = () => {
    const variable = JSON.parse(localStorage.getItem("rare_token"));
    const token = variable.token
    return fetch('http://localhost:8000/movie', {
        headers: {
            Authorization: `Token ${token}`,
        }
    }).then((res) => {
        return res.json()
    })
}

export const getMovieById = (id) => {
    const variable = JSON.parse(localStorage.getItem("rare_token"))
    const token = variable.token
    return fetch(`http://localhost:8000/movie/${id}`, {
        headers: {
            Authorization: `Token ${token}`,
        }
    }).then((res) => res.json())
    }


// export const postMovie = (movie) => {
//     return fetch('http://localhost:8088/movies', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(movie),
//     })}


// export const editMovie = (movie) => {
//     return fetch(`http://localhost:8088/movies/${movie.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(movie),
//     })
// }


// export const getMoviesByUserId = (userId) => {
//     return fetch(`http://localhost:8088/movies?userId=${userId}`).then((res) => res.json())
// }

// export const deleteMovie = (movieId) => {
//     return fetch(`http://localhost:8088/movies/${movieId}`, { method: "DELETE" })
// }