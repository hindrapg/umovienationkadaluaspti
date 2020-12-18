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

const WatchListOut = (movie) =>{

    const {title, poster_path, overview, vote_average} = movie;
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
            </div>
        </div>
    );
};
export default WatchListOut;