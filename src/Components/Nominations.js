import React from 'react';
import '../Styles/Nominations.scss';

const Nominations = (props) => {
  const nominations = props.nominations;
  const setNominations = props.setNominations;

  return (
    
      <section className="nominations">
        <h2>Your nominations are...</h2>
        <ul>
          {!!nominations && nominations.map((movie, idx) => {
            return (
              <li key={idx}>
                <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/100x145.png?text=POSTER+NOT+FOUND'} alt={movie.Title}></img>
                <button 
                onClick={e => {
                  e.preventDefault(); 
                  setNominations(nominations.filter(e => e.imdbID !== movie.imdbID));
                }}
                >Remove <span className="sr-only">{movie.Title} from nominations.</span></button>
              </li>
            )
          })}
        </ul>        
      </section>    
  )
}

export default Nominations;

