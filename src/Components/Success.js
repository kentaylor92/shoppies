import React from 'react';
import '../Styles/Success.scss';
import { TwitterShareButton } from 'react-share';

const Success = (props) => {
  const nominations = props.nominations;
  const setSuccess = props.setSuccess;

  return (
    <div className="success">
      <button className="close" aria-label="Close pop up" onClick={e => {e.preventDefault(); setSuccess(false)} }>X</button>
      <h3>We have received your nominations! Thank you for your time.</h3>
      <p>You nominated...</p>
      <ul>
        {!!nominations && nominations.map((movie, idx) => {
          return (
            <li key={idx}>
              <img src={movie.Poster} alt={movie.Title}></img>
              <p>{movie.Title} ({movie.Year})</p>
            </li>
          )
        })}
      </ul>
      <p>Share with your friends here :)</p>
      <TwitterShareButton url={`Check out my Shoppies nominations!  Make your own here: ${window.location.href}`}>
      <a className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </TwitterShareButton>    
    </div>
  )
}

export default Success;