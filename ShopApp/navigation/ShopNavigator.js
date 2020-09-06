import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import OrderListScreen from "../screens/OrderListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { TouchableOpacity, Text, View } from "react-native";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <Ionicons
                name={"ios-menu"}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
                size={30}
              />
            );
          },
        })}
      />
    </HomeStack.Navigator>
  );
};

const OrderStack = createStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name={"OrderListScreen"}
        component={OrderListScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <Ionicons
                name={"ios-menu"}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
                size={25}
              />
            );
          },
        })}
      />
    </OrderStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name={"SettingsScreen"}
        component={SettingsScreen}
        options={(props) => ({
          headerLeft: () => {
            return (
              <Ionicons
                name={"ios-menu"}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
                size={25}
              />
            );
          },
        })}
      />
    </SettingsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  const screenName = props.route.params.name;

  const [isPressedHome, setIsPressedHome] = useState(false);
  const [isPressedOrder, setIsPressedOrder] = useState(false);
  const [isPressedSettings, setIsPressedSettings] = useState(false);

  return (
    <Tab.Navigator initialRouteName={screenName}>
      <Tab.Screen
        name={"HomeStackNavigator"}
        component={HomeStackNavigator}
        listeners={(props) => ({
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.jumpTo("Home");
          },
        })}
        // options={(props) => ({
        //   tabBarButton: () => {
        //     return (
        //       <TouchableOpacity
        //         onPress={() => {
        //           props.navigation.jumpTo("Home");
        //           setIsPressedHome((value) => !value);
        //         }}
        //       >
        //         <View style={{ width: "100%", alignItems: "center" }}>
        //           <Ionicons name="ios-home" size={25} />
        //         </View>
        //         <View
        //           style={{ width: "100%", marginLeft: 5, alignItems: "center" }}
        //         >
        //           {isPressedHome && (
        //             <Text style={{ color: "green" }}>HomeStackNavigator</Text>
        //           )}
        //           {!isPressedHome && (
        //             <Text style={{ color: "black" }}>HomeStackNavigator</Text>
        //           )}
        //         </View>
        //       </TouchableOpacity>
        //     );
        //   },
        // })}
      />
      <Tab.Screen
        name={"OrderStackNavigator"}
        component={OrderStackNavigator}
        listeners={(props) => ({
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.jumpTo("Order");
          },
        })}
        // options={(props) => ({
        //   tabBarButton: () => {
        //     return (
        //       <TouchableOpacity
        //         onPress={() => {
        //           props.navigation.jumpTo("Order");
        //           setIsPressedOrder((value) => !value);
        //         }}
        //       >
        //         <View style={{ width: "100%", alignItems: "center" }}>
        //           <Ionicons name="ios-list" size={25} />
        //         </View>
        //         <View
        //           style={{ width: "100%", marginLeft: 5, alignItems: "center" }}
        //         >
        //           {isPressedOrder && (
        //             <Text style={{ color: "green" }}>OrderStackNavigator</Text>
        //           )}
        //           {!isPressedOrder && (
        //             <Text style={{ color: "black" }}>OrderStackNavigator</Text>
        //           )}
        //         </View>
        //       </TouchableOpacity>
        //     );
        //   },
        // })}
      />
      <Tab.Screen
        name={"SettingsStackNavigator"}
        component={SettingsStackNavigator}
        listeners={(props) => ({
          tabPress: (e) => {
            e.preventDefault();
            props.navigation.jumpTo("Settings");
          },
        })}
        // options={(props) => ({
        //   tabBarButton: () => {
        //     return (
        //       <TouchableOpacity
        //         onPress={() => {
        //           props.navigation.jumpTo("Settings");
        //           setIsPressedSettings((value) => !value);
        //         }}
        //       >
        //         <View style={{ width: "100%", alignItems: "center" }}>
        //           <Ionicons name="ios-settings" size={25} />
        //         </View>
        //         <View
        //           style={{ width: "100%", marginLeft: 5, alignItems: "center" }}
        //         >
        //           {isPressedSettings && (
        //             <Text style={{ color: "green" }}>
        //               SettingsStackNavigator
        //             </Text>
        //           )}
        //           {!isPressedSettings && (
        //             <Text style={{ color: "black" }}>
        //               SettingsStackNavigator
        //             </Text>
        //           )}
        //         </View>
        //       </TouchableOpacity>
        //     );
        //   },
        // })}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        initialParams={{ name: "HomeStackNavigator" }}
        name={"Home"}
        component={TabNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        initialParams={{ name: "OrderStackNavigator" }}
        name={"Order"}
        component={TabNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        initialParams={{ name: "SettingsStackNavigator" }}
        name={"Settings"}
        component={TabNavigator}
        options={{ unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
