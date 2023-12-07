import React from 'react'
//Components
import { FeaturedMovie } from '@/components/featured-movie'
import { MoviesSection } from '@/components/movies-section'
import Categories from '@/components/categories'
//Data
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

function HomeContainer({ topPopularData = {}, selectedCategory, popularData = {} }) {
  return (
    <div >
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (<MoviesSection title={

        Genres.genres.find(item => `${item.id}` === selectedCategory.id).name}

        movies={selectedCategory.movies} />)}

      <MoviesSection title={"Top Popü Films"}
        movies={topPopularData.slice(0, 7)}
      />
      <MoviesSection title={"Populer Films"}
        movies={popularData.slice(7, 14)}
      />
      <MoviesSection title={"Favorites Films"}
        movies={popularData.slice(14, 21)}
      />
    </div>
  )
}

export default HomeContainer
