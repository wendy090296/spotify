export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavourites = (favourite) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: favourite,
  };
};

export const addToPlayer = (song) => {
  return {
    type: ADD_TO_PLAYER,
    payload: song,
  };
};

export const removeFromFavourites = (notliked) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: notliked,
  };
};
