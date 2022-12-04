import React from "react";
import { View } from "react-native";
import { styles } from "../../styles/styles";
import { Text, Image } from "native-base";
import useAuth from "../../hooks/useAuth";

export const UserProfile = () => {
  const [user] = useAuth();

  return (
    <View style={styles.container}>
      {user && <Text style={styles.header}>Welcome, {user.username}</Text>}
      <Image
        style={styles.image}
        source={require("../../../assets/pond_half.png")}
        width={"100%"}
        height={"50%"}
        alt="pond"
      />
    </View>
  );
};

export default UserProfile;
