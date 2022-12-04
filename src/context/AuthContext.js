import { createContext, useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export default AuthContext;

const decodeUser = (token) => {
  let newUser = jwtDecode(token);
  console.log(newUser);
  return newUser;
};

export const AuthProvider = ({ children }) => {
  const BASE_URL = "http://127.0.0.1:8000/api/auth";
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [isServerError, setIsServerError] = useState(false);
  const navigation = useNavigation();

  const registerUser = async (registerData) => {
    try {
      let finalData = {
        username: registerData.username,
        password: registerData.password,
        email: registerData.email,
        first_name: registerData.firstName,
        last_name: registerData.lastName,
        is_staff: false,
      };
      let response = await axios.post(`${BASE_URL}/register/`, finalData);
      if (response.status === 201) {
        console.log("Successful registration! Log in to access token");
        setIsServerError(false);
        ("/login");
      } else {
        //navigate("/register");
      }
    } catch (error) {
      console.log(error.toJSON());
    }
  };

  const loginUser = async (loginData) => {
    try {
      let response = await axios.post(`${BASE_URL}/login/`, loginData);
      if (response.status === 200) {
        await AsyncStorage.setItem(
          "token",
          JSON.stringify(response.data.access)
        );
        let userToken = await AsyncStorage.getItem("token");
        let decodedUser = decodeUser(userToken);
        setUser(decodedUser);
        navigation.navigate("Profile");
      } else {
        navigation.navigate("Register");
      }
    } catch (error) {
      if (error.response.status === 401) {
        console.log(error);
        navigation.navigate("Register");
      } else {
        console.log(error);
        setIsServerError(true);
      }
    }
  };

  const logoutUser = async () => {
    if (user) {
      await AsyncStorage.removeItem("token");
      setUser(null);
      setToken(null);
      navigation.navigate("Login");
    }
  };

  const contextData = {
    user,
    token,
    loginUser,
    logoutUser,
    registerUser,
    isServerError,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
