import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))} || {};
    </div>
  );
}

function MovieDetails(props) {
  const { id } = props.movie;
  const { movie } = props;
  console.log(props)

  return (
    <Link to={`/movies/${id}`}>
      <MovieCard data={movie}/> 
    </Link>
  );
}