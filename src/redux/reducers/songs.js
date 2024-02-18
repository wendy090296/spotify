import { ADD_SONGS } from "../actions";

const initialState = {
  arrayOfSongs: {
    content: [],
  },
};

const addSearchedSongs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONGS:
      return {
        ...state,
        content: [action.payload],
      };

    default:
      return state;
  }
};
export default addSearchedSongs;
