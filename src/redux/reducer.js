import {
  GET_GENRES,
  GENRES_ARTISTS,
  DISSMIS_MODAL,
  LOGOUT,
  LOGIN,
  LOGIN_STATUS
} from "./actions/types";
const initState = {
  genres: [],
  isModalOpen: false,
  artists: [],
  isLoggedIn: false,
  username: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_GENRES: {
      return { ...state, genres: action.payload };
    }
    case GENRES_ARTISTS: {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        artists: action.payload
      };
    }
    case DISSMIS_MODAL: {
      return { ...state, isModalOpen: false };
    }
    case LOGIN_STATUS: {
      return { ...state, isLoggedIn: action.payload };
    }
    case LOGOUT: {
      return { ...state, isLoggedIn: false };
    }
    case LOGIN: {
      return { ...state, username: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
