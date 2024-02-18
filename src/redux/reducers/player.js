import { ADD_TO_PLAYER } from "../actions";

const initialState = {
  inPlayer: [],
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        inPlayer: [action.payload],
      };

    default:
      return state;
  }
};
export default player;
