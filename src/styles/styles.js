import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EAD2",
    alignItems: "center",
    color: "white",
  },
  header: {
    fontSize: 30,
    color: "#707070",
    padding: 12,
  },
  image: {
    resizeMode: "contain",
  },
  form: {
    flex: 1,
    backgroundColor: "#F0EAD2",
    padding: 5,
  },
});
