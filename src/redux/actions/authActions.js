import { LOGOUT, LOGIN, LOGIN_STATUS } from "./types";

const DZ = window.DZ;

export const loginStatus = () => dispatch => {
  DZ.getLoginStatus(function(response) {
    if (response.authResponse) {
      // logged in and connected user, someone you know
      dispatch({ type: LOGIN_STATUS, payload: true });
    } else {
      // no user session available, someone you dont know
      dispatch({ type: LOGIN_STATUS, payload: false });
    }
  });
};

export const login = () => dispatch => {
  DZ.login(
    function(response) {
      if (response.authResponse) {
        DZ.api("/user/me", function(response) {
          dispatch({ type: LOGIN, payload: response.name });
        });
      } else {
        dispatch({ type: LOGIN, payload: null });
      }
    },
    { perms: "basic_access,email" }
  );
};

export const logout = () => dispatch => {
  DZ.logout();
  dispatch({ type: LOGOUT });
};
