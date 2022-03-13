import React from 'react';
import './App.css';

// All functionalities that are solely related to this component (like addWatchedMovie) must be part of this module
// Those  functionalities can be  implemented in a better approach, please check my next commits
import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

const getMoviesComponents = (movies) => {
  var components = [];
 // IMPORTANT: Please check my comments for App below (mostly applicable here)
 // To get a list of JSX elements, use Array.map()
  movies.forEach(function(movie) {
    components.push( // Redundant call that can be avoided
      <div className="all"> {/* Each element in an array must have a unique key */}
        <div> {/* Redundant HTML tags (possibly) */}
          <img src={movie.image} height="100px" /> {/* To facilitate styling, using CSS is preferred over hardcoded attributes */}
        </div>
        <span> {/* This link doesn't provide any value here */}
          <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

// Please check my comments for getMoviesComponents above (all applicable here)
// Also check my comments for App below (mostly applicable here)
function getWatchedMoviesComponents(movies) {
  var components = [];

  movies.forEach(function(movie) {
    components.push(movie && (
      <div className="watched">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

/**
 * There is no acceptable bound between Component name, hierarchy level and its role
 * As the highest level component, App must act as a higher order component which facilitates
 * global application state and routing
 */
function App(props) {
  return (
    <div className="App">
      <h1>Codest Movies!</h1> {/* Assuming that this app doesn't support multi-language UI, I accepted hard-coded strings */}
      <h1>Add movie!</h1>
      {/* Using HTML tags to style component is not a good choice, as it makes it difficult to separate styling from layout
          Don't use <br/> to implement layout; Using CSS grid or flex box is recommended
          Separating event handleres from UI html is recommended
          Using and updating global variables are not acceptable as React cannot understand and handle those changes
          UI controls must be controlled by component state (not always; but for the purpose of this component)
      */}
      <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
      <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1>
      {/* Fetching data on render can cause issues like infinite loop (regardless of the fact that React can prevent that)
          The data (and generated JSX) must be available before renderiing
       */}
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {/* The above comments apply here too */}
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
}

/**
 * Global variables (even those limited to the module) must be avoided
 * Those values can be handled in form of component state or its props
 */
var title = '';
var image = '';
var comment = '';

export default App;
