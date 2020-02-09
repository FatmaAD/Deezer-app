import { GET_GENRES, GENRES_ARTISTS } from "./types";
const DZ = window.DZ;

export const getGenres = () => dispatch => {
  DZ.api("/genre", res => {
    dispatch({ type: GET_GENRES, payload: res.data });
  });
};

export const getGenreArtists = id => dispatch => {
  DZ.api(`/genre/${id}/artists`,res => {
    dispatch({ type: GENRES_ARTISTS, payload: res.data });
  });
};
