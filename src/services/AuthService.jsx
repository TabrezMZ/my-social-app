import axios from "axios";

export const loginService = (username, password) => {
  return axios.post("api/auth/login", {
    username: username,
    password: password,
  });
};

export const signUpService = (email, password, firstName, username) => {
    return axios.post("api/auth/signup", {
      email: email,
      password: password,
      firstName: firstName,
      username: username,
    });
  };
