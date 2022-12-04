import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import UserProfile from "../UserProfile/UserProfile";
import CommunityDashboard from "../CommunityDashboard/CommunityDashboard";
import { LogCleanup } from "../LogCleanup/LogCleanup";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthContext";

const Drawer = createDrawerNavigator();

export const NavigationMenu = () => {
  const { logoutUser } = useContext(AuthContext);
  const [user, token, loadUser] = useAuth();

  const headerStyle = {
    headerStyle: {
      backgroundColor: "#F0EAD2",
    },
  };

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {user && <DrawerItem label="Logout" onPress={logoutUser} />}
      </DrawerContentScrollView>
    );
  }

  if (!user) {
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
          name="Login"
          component={LoginPage}
          options={headerStyle}
        />
        <Drawer.Screen
          name="Register"
          component={RegisterPage}
          options={headerStyle}
        />
      </Drawer.Navigator>
    );
  }

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
};
