import React, {useState, useEffect} from 'react';
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

// console.log(nominations);

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     redirect: 'follow',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'multipart/form-data'
  //     },
  //   };

    
  //   // getMovies();
  // }, [])

  const getMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
      .then(response => response.text())
      .then(result => result)
      .catch(error => console.log('error', error));
    const movies = JSON.parse(response).Search;
    console.log(movies)
    setResults(movies);
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const emptySearch = (e) => {
    setSearchTerm("");
  };

  console.log(searchTerm);
  console.log(nominations);


  return (
    <div>
      <form action="submit"
       >
        <label for="search"></label>
        <input type="text" 
        placeholder="Click here to search for movies!" 
        name="search"
        onChange={handleChange}
        value={searchTerm}
        ></input>
        <button type="submit" onClick={e =>  {
          e.preventDefault(); 
          console.log("clicked!", searchTerm)
          getMovies();
          emptySearch();
          // getMovies();
        }}
          >Search!</button>
      </form>

      <div className="results-noms">

        <Nominations nominations={nominations} count={count} />        
        {nominations.length !== total ? 
        <p>Please select {count} more movies!</p> : 
        <p>NO MORE!!!</p>      
        }
        <Results results={results} nominations={nominations} setNominations={setNominations} count={count}/>

      </div>
    </div>
  )
}

export default Search;