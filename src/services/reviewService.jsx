export const getMovieReviewsById = async (id) => {
    const variable = JSON.parse(localStorage.getItem("rare_token"));
    const token = variable.token;
    return fetch(`http://localhost:8000/review/${id}`, {
          headers: {
            Authorization: `Token ${token}`,
            // Add other headers if needed
          },
        }).then((res) => res.json());
      };

  export const createReview = async (reviewContent) => {
    const variable = JSON.parse(localStorage.getItem("rare_token"))
    const token = variable.token;
    return fetch(`http://localhost:8000/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(reviewContent),
    }).then((res) => res.json())
  }