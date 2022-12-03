import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { styles } from "../../styles/styles";
import { Text, Image } from "native-base";
import useAuth from "../../hooks/useAuth";

export const UserProfile = () => {
  const [user, token] = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <View style={styles.container}>
      {user ? (
        <Text style={styles.header}>Welcome, {user.username}</Text>
      ) : (
        <Text style={styles.header}>Welcome, UNKNOWN</Text>
      )}

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
