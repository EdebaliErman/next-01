import React from 'react'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'
import { moviesDetailGetData } from '@/services'

 async function MoviePage({ params, searchParams }) {
    const movieDetail = await moviesDetailGetData(params.id)

    !movieDetail && notFound()

    if (searchParams.error === "true") {
        throw new Error("Error happened")
    }

    return <MovieContainer movie={movieDetail} />
}

export default MoviePage
