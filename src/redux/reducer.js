import * as actions from './actions';

// Jsut for the sake fo demonstration
const defaultMovies = [
    {
        title: 'The Avengers',
        imageUrl: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
        comment: 'New York blows up in this!',
        watched: false
    },
    {
        title: 'Dark City',
        imageUrl: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
        comment: 'This looks mysterious. Cool!',
        watched: true
    },
    {
        title: 'Hot Tub Time Machine',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
        comment: 'Someone said this was fun. Maybe!',
        watched: false
    }
];

const appState = {
    movies: defaultMovies
}

const reducer = (oldState = appState, action) => {
    const newState = { ...oldState };

    switch (action.type) {
        case actions.ACTION_ADD_MOVIE:
            newState.movies = [...oldState.movies,
            {
                title: action.data.title,
                imageUrl: action.data.imageUrl,
                comment: action.data.comment,
                watched: true
            }];
            localStorage.setItem('movies-all', JSON.stringify(newState.movies));
            break;
    }

    return newState;
}

export default reducer;