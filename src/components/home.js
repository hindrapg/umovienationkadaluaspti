import React, {useEffect, useState} from 'react';
import Movie from './Movie';

const API_Featured = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a75f2f1f2e14d5389e3dd2b6d37a02d6&page=1";
const API_Img = "https://image.tmdb.org/t/p/w1280";
const API_search = "https://api.themoviedb.org/3/search/movie?&api_key=a75f2f1f2e14d5389e3dd2b6d37a02d6&query="
// const [ arrFavorite, setFavorite ] = useState([]);

const Home = () =>{

  const [ movies, setMovies] = useState([]);
  const [ dicari, setSearchTerm ] = useState('');


  useEffect(async () => {
    fetch(API_Featured).then(res => res.json()).then(data => {
      console.log(data);
      setMovies(data.results);
    });
  }, [])

  const pencarian = (e) =>{
    e.preventDefault();
      if(dicari){
      fetch(API_search+dicari).then(res => res.json()).then(data => {
        console.log(data);
        setMovies(data.results);
      });
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) =>{
    setSearchTerm(e.target.value);
  }
  return(
    <React.Fragment>
    <header>
      <form onSubmit={pencarian}>
       <input className="search" type="search" placeholder="Search Your Fav Movie"
          value={dicari} onChange={handleOnChange}></input>
      </form>
    </header>
    <div className="movie-container">
    {movies.length > 0 && movies.map(movie=>(
    <Movie key={movie.id} {...movie}/>
    ))}</div>; 
    </React.Fragment>
  )
}

export default Home;