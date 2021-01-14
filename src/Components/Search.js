import React, {useState, useEffect} from 'react';
import Results from '../Components/Results';
import Nominations from '../Components/Nominations';
import Success from '../Components/Success';
import Sticky from 'react-sticky-el';
import '../Styles/Search.scss';

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState(null);
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState(JSON.parse(localStorage.getItem('noms')) || []);
  const [success, setSuccess] = useState(false);
  const count = 5 - nominations.length;
  const total = 5;
  const apiKey = `a8e57f6b`;


  useEffect(() => {
    localStorage.setItem('noms', JSON.stringify(nominations))
  }, [nominations])

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

  return (
    <div className="search">
      {!success ? <p className="instructions">Welcome to the 2021 Shoppies! What a year it has been. If you're anything like us here on the Shoppies team, you've spent the last 9 months holed away in your apartment, baking countless loaves of sourdough while cruising through every single item in the Netflix, Crave and Prime catalogues. This rigorous and demanding training has prepared you to cast your ballot in this year's event.</p> : ''}
      
      {!success ? <p className="instructions">To get started, search for your favourite movies and then nominate the 5 that you feel deserve to win <span>the most coveted award in the entertainment industry</span> - a 2021 Shoppie.</p> : ''}
      {!success ? 
        <form action="submit">
          <label for="search">Search for movies by title:</label>
          <input type="text" 
            placeholder="ie. Tampopo" 
          name="search"
          onChange={handleChange}
          value={searchTerm ? searchTerm : ''}
          ></input>
          <button type="submit" onClick={e =>  {
            e.preventDefault(); 
            if (searchTerm) {
              getMovies();
            }
            emptySearch()
          }}>
          <i className="fa fa-search" />Search</button>
      </form> : ''}

      <div className="results-noms">
        {nominations.length && !success ? <Nominations nominations={nominations} setNominations={setNominations} count={count} /> : ''}       
        <Sticky>
          {nominations.length && nominations.length !== total ? 
            <p className="movie-count">Nominations remaining: <span>{count}</span></p> : 
            nominations.length && nominations.length === total && !success
            ?
            <div className="submit-noms">
              <p className="movie-count">Click here to submit your nominations!</p>
              <button className="submit-noms-btn" onClick={e => {e.preventDefault(); setSuccess(true)}}>Submit</button>
            </div> : ''    
          }
        </Sticky>
        {!success ? <Results results={results} nominations={nominations} setNominations={setNominations} count={count}/> : ''}
        {!!success ? <Success nominations={nominations} setSuccess={setSuccess} /> : ''}

      </div>
    </div>
  )
}

export default Search;