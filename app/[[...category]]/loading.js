import { CategoriesLoading } from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'
import React from 'react'

function Loading() {
    return (
        <div>
            <CategoriesLoading />
            <FeaturedMovieLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
        </div>
    )
}

export default Loading
