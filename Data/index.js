const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_TOKKEN}`
    }
};

export const topPopulerGetData = async () => {
    const res = await fetch(process.env.API_URL + "/top_rated?page=1", options)
    const req = await res.json()
    return req.results
}

export const populerGetData = async () => {
    const res = await fetch(process.env.API_URL + "/popular?page=1", options)
    const req = await res.json()
    return req.results
}