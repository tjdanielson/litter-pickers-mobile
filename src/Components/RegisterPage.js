import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Input, Stack, FormControl, Button } from "native-base";
import AuthContext from "../context/AuthContext";
import { styles } from "../styles/styles";

//TODO: This page is not currently functional,
//need to update register auth context and wire this page up

export const RegisterPage = ({ navigation }) => {
  const { registerUser, isServerError } = useContext(AuthContext);
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
      registerUser(formData);
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
              <Text>Register</Text>
            </Button>
          </Stack>
        </FormControl>
      </ScrollView>
    </View>
  );
};

export default RegisterPage;
