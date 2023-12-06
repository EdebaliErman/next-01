import React from 'react'
import Movies from '@/mocks/movies.json'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'
function MoviePage({ params, searchParams }) {

    const movieDetail = Movies.results.find(item => item.id.toString() === params.id)
    !movieDetail && notFound()

    if (searchParams.error === "true") {
        throw new Error("Error happened")
    }

    return <MovieContainer movie={movieDetail} />
}

export default MoviePage