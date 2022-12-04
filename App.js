import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { styles } from "./src/styles/styles";
import { AuthProvider } from "./src/context/AuthContext";
import { NavigationMenu } from "./src/Components/Navigation/NavigationMenu";

const App = () => {
  return (
    <NativeBaseProvider style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <NavigationMenu />
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
