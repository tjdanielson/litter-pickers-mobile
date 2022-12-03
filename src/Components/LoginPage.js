import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Input, Stack, FormControl, Button } from "native-base";
import AuthContext from "../context/AuthContext";
import { styles } from "../styles/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const LoginPage = ({ navigation }) => {
  const { loginUser, isServerError, logoutUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState("");

  const compileForm = () => {
    setFormData({
      username: username,
      password: password,
    });
  };

  useEffect(() => {
    if (formData.username) {
      loginUser(formData);
    }
  }, [formData]);

  return (
    <View style={styles.form}>
      <ScrollView>
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                value={username}
                onChangeText={(e) => setUsername(e)}
                placeholder="Username"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                value={password}
                onChangeText={(e) => setPassword(e)}
                placeholder="Password"
              />
            </Stack>
            <Button
              success
              style={{ paddingLeft: 5, marginTop: 10, marginLeft: 10 }}
              onPress={compileForm}
            >
              <Text>Login</Text>
            </Button>
            <Button
              success
              style={{ paddingLeft: 5, marginTop: 10, marginLeft: 10 }}
              onPress={logoutUser}
            >
              <Text>LOGOUT</Text>
            </Button>
          </Stack>
        </FormControl>
      </ScrollView>
    </View>
  );
};

export default LoginPage;
