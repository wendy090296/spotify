const initialState = {
  song: {
    playedSongs: [],
  },
  favourites: {
    mostLikedSongs: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default mainReducer;
