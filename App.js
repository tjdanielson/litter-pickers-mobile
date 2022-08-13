import * as React from "react";
import { View, Text, Button } from "react-native";
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

const Drawer = createDrawerNavigator();

function HamburgerMenu() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Profile" component={UserProfile} />
      <Drawer.Screen
        name="Community Dashboard"
        component={CommunityDashboard}
      />
      <Drawer.Screen name="Log a Cleanup" component={LogCleanup} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HamburgerMenu />
    </NavigationContainer>
  );
}
