import react, {useState} from 'react';
import { useStateValue } from '../StateProvide';
const API_Img = "https://image.tmdb.org/t/p/w1280";

const setColor = (vote) =>{
    if(vote >= 7.5){
        return 'green';
    }else if(vote >= 6){
        return 'yellow';
    }else{
        return 'red'
    }
}



const Movie = ({title, poster_path, overview, vote_average}) =>{
    const [{watchList},dispatch]= useStateValue();

    const addToWatchList = () =>{
        dispatch({
            type: 'ADD_TO_WATCHLIST',
            item:{
                title : title, 
                poster_path : poster_path, 
                overview : overview, 
                vote_average : vote_average
            },
        })
    };
    return (
        <div className="movie">
            <img src={API_Img + poster_path} alt={title}/>
            <div className="info-movie">
                <h4>{title}</h4>
                <span className={`warnaRate ${setColor(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-desc">
                <h3>Overview : </h3>
                <h4>{title}</h4>
                <p>{overview}</p>
                <h3 onClick={addToWatchList}>+ ADD TO YOUR WATCHLIST</h3>
            </div>
        </div>
    );
};

export default Movie;