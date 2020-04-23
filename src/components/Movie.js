import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, year, title, summary, poster, genres}){
    return (
        <>
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="moive__data">
        <Link
        to={{
            pathname:`/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <h3 className="movie__title">{title}</h3>
            </Link>
            <h5 className="movie__year">{year}</h5>
    <ul className="genres">
        {genres.map((genre, index) =>(
            <li className="genres__genre" key={index}>{genre}</li>
            ))}
        </ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
    </>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;