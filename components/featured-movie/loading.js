import React from 'react'
import Loading from '../loading'
import styles from "./styles.module.css";
function FeaturedMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  )
}

export default FeaturedMovieLoading
