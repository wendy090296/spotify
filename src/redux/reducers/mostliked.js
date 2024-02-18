import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  favourites: [],
};

const addToFavourites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: [
          ...state.favourites.filter(
            (preferito) => preferito !== action.payload
          ),
        ],
      };

    default:
      return state;
  }
};
export default addToFavourites;
