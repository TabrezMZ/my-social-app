import axios from "axios";

export const loginService = (loginData) => {
  return axios.post("api/auth/login", {
    username: loginData.username,
    password: loginData.password,
  });
};

export const signUpService = (SignupData) => {
    return axios.post("api/auth/signup", 
      SignupData
    );
  };
