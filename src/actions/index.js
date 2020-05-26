// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }
// {
//     type:'DECREASE_COUNT    '
// }

export const ADD_MOVIES='ADD_MOVIES';

export const ADD_TO_FAVOURITE='ADD_TO_FAVOURITE';


export const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE';
 

export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';

// action creator
export function addMovies (movies) {
    return {
        type:ADD_MOVIES,
        movies 
    }
}

export function addFavourite (movies) {
    return {
        type:ADD_TO_FAVOURITE,
        movies 
    }
}

export function removeFromFavourite(movie)  {
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}

export function setShowFavourite(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
}