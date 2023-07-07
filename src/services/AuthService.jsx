import axios from "axios";

export const loginService = (loginData) => 
   axios.post("api/auth/login", {
    username: loginData.username,
    password: loginData.password,
  });

export const signUpService = (SignupData) => 
     axios.post("api/auth/signup", 
      SignupData
    );
  
