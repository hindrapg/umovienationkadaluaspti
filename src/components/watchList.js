import React, {useEffect, useState} from 'react';
import WatchListOut from './watchListOutput';
import { useStateValue } from '../StateProvide';

const WatchList = () =>{
    const [{watchList}] = useStateValue();

    return(
        <div className="movie-container">
            {watchList.map(movie=>(
                <WatchListOut key={movie.id} 
                {...movie}/>
            ))}
        </div>
    )
}

export default WatchList;
