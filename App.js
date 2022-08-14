import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { UserProfile } from "./src/Components/UserProfile/UserProfile";
import CommunityDashboard from "./src/Components/CommunityDashboard/CommunityDashboard";
import Homepage, { LogCleanup } from "./src/Components/LogCleanup/LogCleanup";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { styles } from "./src/styles/styles";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const headerStyle = {
  headerStyle: {
    backgroundColor: "#F0EAD2",
  },
};

const Drawer = createDrawerNavigator();

function HamburgerMenu() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ADC178",
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Profile"
        component={UserProfile}
        options={headerStyle}
      />
      <Drawer.Screen
        name="Community Dashboard"
        component={CommunityDashboard}
        options={headerStyle}
      />
      <Drawer.Screen
        name="Log a Cleanup"
        component={LogCleanup}
        options={headerStyle}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider style={styles.container}>
      <NavigationContainer>
        <HamburgerMenu />
      </NavigationContainer>
      <View></View>
    </NativeBaseProvider>
  );
}
