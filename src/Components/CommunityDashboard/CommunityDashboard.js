import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useAuth from "../../hooks/useAuth";

export const CommunityDashboard = () => {
  const [user, token, loadUser] = useAuth();
  return (
    <View>
      <Text>Community Dashboard {user?.username}</Text>
    </View>
  );
};

export default CommunityDashboard;
