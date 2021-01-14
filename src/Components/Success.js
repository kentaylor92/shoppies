import React from 'react';
import '../Styles/Success.scss';
import { TwitterShareButton } from 'react-share';

const Success = (props) => {
  const nominations = props.nominations;
  const setSuccess = props.setSuccess;

  return (
    <div role="dialog" aria-labelledby="title" aria-modal="true" className="success">
      <button className="close" onClick={e => { e.preventDefault(); setSuccess(false) }}><span className="sr-only">Close Modal</span><i className="fa fa-times"></i></button>
      <h2 id="title">We have received your nominations! Thank you for your time.</h2>
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
        <i className="fa fa-twitter twitter" aria-hidden="true"></i>
      </TwitterShareButton>    
    </div>
  )
}

export default Success;