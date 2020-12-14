import React, {useEffect, useState} from 'react';
import Movie from './Movie';

const API_TopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=a75f2f1f2e14d5389e3dd2b6d37a02d6&language=en-US&page=1"

const Favorite = () => {
    const [ movies, setMovies] = useState([]);

    useEffect(async () => {
    fetch(API_TopRated).then(res => res.json()).then(data => {
            console.log(data);
            setMovies(data.results);
        });
    }, [])
    return (
        <React.Fragment>
            <div className="movie-container">
            {movies.length > 0 && movies.map(movie=>(
            <Movie key={movie.id} {...movie}/>
            ))}</div>; 
        </React.Fragment>
    );
};

export default Favorite;