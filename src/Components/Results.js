import React from 'react';
import '../Styles/Results.scss';

const Results = (props) => {
  const nominations = props.nominations;
  const setNominations = props.setNominations;
  const total = 5;
  
  return (
    <section className="results">
      <h2 className="sr-only">Search results:</h2>
      <ul>
        {!!props.results ? props.results.map((movie, idx) => {
          const isSelected = nominations.some(e => e.imdbID === movie.imdbID);
          return (
            <li key={idx} className={isSelected ? 'selected' : ''}>
              <img src={movie.Poster !== "N/A" ? movie.Poster : `https://via.placeholder.com/180x266.png?text=POSTER+NOT+FOUND`} alt={movie.Title}/>
              <p>{movie.Title} ({movie.Year})</p>              
              <button className={nominations.length !== total ? '' : 'disabled'}
                onClick={e => {
                  e.preventDefault();               
                  if (nominations.length < total || isSelected) {
                    if (isSelected) {
                      setNominations(nominations.filter(e => e.imdbID !== movie.imdbID));
                    } else {
                      setNominations([...nominations, movie]);                    
                    }        
                  }
                  }}>{!isSelected ? 'Nominate' : 'Remove'}<span className="sr-only">{movie.Title}</span>
              </button>
            </li>
          )
        }) : 
        !props.results ? 
        <div className="no-results">
          <p>Sorry. No results found. Please try another search.</p>
        </div> : <div>Loading...</div>
        }
      </ul>
    </section>
  )
}

export default Results;