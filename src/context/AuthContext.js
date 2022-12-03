import { createContext, useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthContext = createContext();

export default AuthContext;

const decodeUser = (token) => {
  let newUser = jwtDecode(token);
  console.log(newUser);
  return newUser;
};

const getTokenFromStorage = async () => {
  try {
    await AsyncStorage.getItem("token").then((response) => {
      tokenStuff = response;
      console.log("tokenstuff", tokenStuff);
      return tokenStuff;
    });
  } catch {
    return null;
  }
};

const getUserToken = () => {
  let user = getTokenFromStorage();
  console.log(user);
  return user;
};

const setUserObject = async (user) => {
  console.log(`user ${user.toJSON}`);
  if (!user) {
    return null;
  } else {
    try {
      let jsonValue = await AsyncStorage.getItem("token");
      console.log(JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
    // return {
    //     username: user.username,
    //     id: user.user_id,
    //     first_name: user.first_name,
    //     is_staff: user.is_staff,
    //   };
  }
};

export const AuthProvider = ({ children }) => {
  const getTokenFromStorage = async () => {
    try {
      await AsyncStorage.getItem("token").then((response) => {
        tokenStuff = response;
        console.log("tokenstuff", tokenStuff);
        setUser(tokenStuff);
      });
    } catch {
      return null;
    }
  };

  const BASE_URL = "http://127.0.0.1:8000/api/auth";
  const NEW_URL = "http://192.168.1.223:19000/api/auth";
  const userToken = getTokenFromStorage();
  const decodedUser = userToken ? userToken : null;
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
    console.log("inside login user");
    console.log(loginData);
    try {
      console.log("inside try");
      let response = await axios.post(`${BASE_URL}/login/`, loginData);
      if (response.status === 200) {
        await AsyncStorage.setItem(
          "token",
          JSON.stringify(response.data.access)
        );
        let userToken = await AsyncStorage.getItem("token");
        let decodedUser = decodeUser(userToken);
        setUser(decodedUser);
        console.log(decodedUser);
        navigation.navigate("Profile");
      } else {
        //navigate("/register");
      }
    } catch (error) {
      //console.log(error.toJSON());
      setIsServerError(true);
      //navigate("/register");
    }
  };

  const logoutUser = () => {
    if (user) {
      localStorage.removeItem("token");
      setUser(null);
      setToken(null);
      //navigate("/");
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
