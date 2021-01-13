import React from 'react';
import Sticky from 'react-sticky-el';
import '../Styles/Nominations.scss';

const Nominations = (props) => {
  let count = props.count;
  const nominations = props.nominations;
  const setNominations = props.setNominations;
  // const count = props.count - props.nominations.length;
  // console.log(props)
  // console.log(count)

  return (
    <Sticky className="sticky-container">
      <div className="nominations">
        <h3>Your nominations are...</h3>
        <ul>
          {!!props.nominations && props.nominations.map((movie, idx) => {
            return (
              <li key={idx}>
                <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/100x145.png?text=POSTER+NOT+FOUND'} alt={movie.Title}></img>
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
    </Sticky>
  )
}

export default Nominations;

