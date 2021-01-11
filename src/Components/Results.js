import React from 'react';
import '../Styles/Results.scss';
import Nominations from './Nominations';

const Results = (props) => {
  const nominations = props.nominations;
  const setNominations = props.setNominations;
  const total = 5;
  
  return (
    <div className="results">
      <ul>
        {!!props.results && props.results.map((movie, idx) => {
          return (
            <li key={idx}>
              <img src={movie.Poster} alt={movie.Title}/>
              <p>{movie.Title}</p>
              <button onClick={e => {
                e.preventDefault();               
                if (nominations.length < total) {
                  setNominations([...nominations, movie]);          
                }
                }}>Nominate</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Results;