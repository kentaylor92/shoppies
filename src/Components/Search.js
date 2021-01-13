import React, {useState} from 'react';
import Results from '../Components/Results';
import Nominations from '../Components/Nominations';
import '../Styles/Search.scss';

const Search = () => {

const [searchTerm, setSearchTerm] = useState(null);
const [results, setResults] = useState([]);
const [nominations, setNominations] = useState([]);
const count = 5 - nominations.length;
const total = 5;
const apiKey = `a8e57f6b`;

  const getMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
      .then(response => response.text())
      .then(result => result)
      .catch(error => console.log('error', error));
    const movies = JSON.parse(response).Search;
    // console.log(movies)
    setResults(movies);
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const emptySearch = (e) => {
    setSearchTerm("");
  };

  // console.log(searchTerm);
  // console.log(nominations);


  return (
    <div className="search">
      <p className="instructions">Welcome to the 2021 Shoppies! What a year it has been. If you're anything like us here on the Shoppies team, you've spent the last 9 months holed away in your apartment, baking countless loaves of sourdough while cruising through every single item in the Netflix, Crave and Prime catalogues. This rigorous and demanding training has prepared you, as an esteemed member of the Academy of the Shoppies, to cast your ballot in this year's event. And because we know you have watched more movies in 2020 than in any other year combined, we have expanded each ballot for this year's event to include 5 nominations. To get started, search for your favourite movies and then select the 5 that you feel deserve to win <span>the most coveted award in the entertainment industry</span> - a 2021 Shoppie.</p>
      <form action="submit"
       >
        <label htmlFor="search"></label>
        <input type="text" 
          placeholder="Search for movies by title." 
        name="search"
        onChange={handleChange}
        value={searchTerm ? searchTerm : ''}
        ></input>
        <button type="submit" onClick={e =>  {
          e.preventDefault(); 
          if (searchTerm.length) {
            getMovies();
          }
          emptySearch();
          // getMovies();
        }}
        ><i className="fa fa-search" />Search</button>
      </form>

      <div className="results-noms">
        {nominations.length ? <Nominations nominations={nominations} setNominations={setNominations} count={count} /> : ''}       
        {nominations.length && nominations.length !== total ? 
          <p className="movie-count">Please select <span>{count}</span> more movies!</p> : 
          nominations.length && nominations.length === total ?
          <p className="movie-count">Click here to submit your nominations!</p> : 
          ''    
        }
        <Results results={results} nominations={nominations} setNominations={setNominations} count={count}/>

      </div>
    </div>
  )
}

export default Search;