import React from 'react';
import { connect } from 'react-redux';
import AddForm from '../../components/AddForm/AddForm';
import ItemList from '../../components/ItemList/ItemList';
import * as actions from '../../redux/actions';
import './home.css';

const Home = (props) => {
    const watched = props.movies.filter(movie => movie.watched);

    return <div className='home'>
        <AddForm onAddMovie={props.addMovie} />
        <h3>All movies</h3>
        <ItemList thumbnails={props.movies} />
        <h3>Watched</h3>
        <ItemList thumbnails={watched} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: (data) => { dispatch({ type: actions.ACTION_ADD_MOVIE, data }) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);