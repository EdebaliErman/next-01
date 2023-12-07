const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_TOKKEN}`
    }
};

export const topPopulerGetData = async () => {
    const res = await fetch(process.env.API_URL + "/movie/top_rated?page=1", options)
    const req = await res.json()
    return req.results
}

export const populerGetData = async () => {
    const res = await fetch(process.env.API_URL + "/movie/popular?page=1", options)
    const req = await res.json()
    return req.results
}


export const movieListGetData = async () => {
    const res = await fetch(process.env.API_URL + `/genre/movie/list`, options)
    const req = await res.json()
    return req.genres
}

export const singleCategoryGetData = async (genreid) => {
    const res = await fetch(process.env.API_URL + `/discover/movie?with_genres=${genreid}`, options)
    const req = await res.json()
    return req.results
}