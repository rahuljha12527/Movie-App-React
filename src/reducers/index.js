import {ADD_MOVIES, ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITES} from '../actions';
import { useReducer } from 'react';

const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false
};
export  function  movies (state=initialMoviesState,action)  {
          console.log('MOVIE REDUCER');
        // if(action.type===ADD_MOVIES){
        //    return{
        //        ...state,
        //        list:action.movies
        //    }
        // }

        // return state;

        switch (action.type){
            case ADD_MOVIES:
                return {
                    ...state,
                    list:action.movies
                }
                case ADD_TO_FAVOURITE:
                    return {
                        ...state,
                        favourites:[action.movies,...state.favourites]
                    }
                case  REMOVE_FROM_FAVOURITE:
                    const filteredArray=state.favourites.filter(
                        movie=>movie.Title!==action.movie.Title
                    );
                    return {
                        ...state,
                        favourites:filteredArray
                    };   
                 case SET_SHOW_FAVOURITES:
                     return {
                         ...state,
                         showFavourites:action.val
                     }   
                default:
                    return state;

        }
    }

    const initialSearchState={
        result:{}
    };
 export function search (state =initialSearchState,action){
    console.log('SEARCH REDUCER');

    return state; 

 }

 const initialRootState ={
     movies:initialMoviesState,
     search:initialSearchState
 };
 export default function rootReducer (state = initialRootState,action){
         return {
        movies: movies(state.movies,action),
         search: search(state.search,action)
         
     }
 }

