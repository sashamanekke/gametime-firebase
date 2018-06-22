import {FETCH_GAMES} from '../actions';
//import {FETCH_GAME} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    //case FETCH_GAMES:
      //return action.payload;
    //case FETCH_GAME:
      //return [ action.payload ];
    //case DELETE_GAME:
      //return state.filter((car) => car !== action.payload);
    default:
      return state;
  }
}
