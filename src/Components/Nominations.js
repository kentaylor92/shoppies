import React from 'react';
import '../Styles/Nominations.scss';

const Nominations = (props) => {
  let count = props.count;
  const nominations = props.nominations;
  const setNominations = props.setNominations;
  // const count = props.count - props.nominations.length;
  // console.log(props)
  // console.log(count)

  return (
    <div className="nominations">
      <h3>Your nominations are...</h3>
      <ul>
        {!!props.nominations && props.nominations.map((movie, idx) => {
          return (
            <li key={idx}>
              <img src={movie.Poster} alt={movie.Title}></img>
              <button 
              onClick={e => {
                e.preventDefault(); 
                setNominations(nominations.filter(e => e.imdbID !== movie.imdbID));
              }}
              >Remove</button>
            </li>
          )
        })}
      </ul>
      
    </div>
  )
}

export default Nominations;

