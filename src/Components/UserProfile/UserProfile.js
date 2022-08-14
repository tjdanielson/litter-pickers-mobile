import React from "react";
import { View, StyleSheet } from "react-native";
import { styles } from "../../styles/styles";
import { Text, Image } from "native-base";

export const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, Tessa</Text>
      <Image
        style={styles.image}
        source={require("../../../assets/pond_half.png")}
        alt="pond"
      />
    </View>
  );
};

export default UserProfile;
