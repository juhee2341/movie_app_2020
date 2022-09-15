import React from "react";
import PropsType from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres, rating, title_long, runtime }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: { year, title, summary, poster, genres, rating, title_long, runtime },
                }}
            >
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genres, index) => {
                        return <li key={index} className="movie__genre">{genres}</li>
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}</p>
            </div>
            </Link>
        </div>
    );
}

Movie.prototype = {
    year: PropsType.number.isRequired,
    title: PropsType.number.isRequired,
    summary: PropsType.number.isRequired,
    poster: PropsType.number.isRequired,
    genres: PropsType.arrayOf(PropsType.string).isRequired,
};

export default Movie;
